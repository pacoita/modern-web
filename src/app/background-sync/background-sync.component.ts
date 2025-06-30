import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Component, DestroyRef, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IDBPDatabase } from 'idb';
import { IdbService } from './idb-service.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-background-sync',
    imports: [
        MatCardModule,
        NgIf,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatExpansionModule,
        ReactiveFormsModule
    ],
    templateUrl: './background-sync.component.html',
    styleUrl: './background-sync.component.scss'
})
export class BackgroundSyncComponent {
  unsupportedText: string | undefined;
  errorText: string | undefined;
  isLoading = false;
  private http = inject(HttpClient);
  private destroyRef = inject(DestroyRef);
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private idb = inject(IdbService);
  private dbRef: IDBPDatabase | null = null;
  private readonly FORM_DB_NAME = 'BackSyncDb';
  private readonly FORM_TABLE_NAME = 'FormData';

  registrationForm = this.fb.group({
    firstname: '',
    lastname: '',
    email: '',
    feedback: ''
  });

  constructor(private titleService: Title) {
    this.titleService.setTitle('Background Sync');
    if (!('serviceWorker' in navigator) && !('SyncManager' in window)) {
      this.unsupportedText = 'Your browser does not support the Background Sync API and/or Service Workers.';
    }
  }

  async submit() {
    const payload = this.registrationForm.value;
    this.http.post(`http://localhost:3600/back-sync/form-data`, payload)
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: () => {
          this.displayNotification('Form data has been delivered! ✅');
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 504) {
            this.displayNotification('🔥 You are OFFLINE 🔥 We will send the data once back online 📡');
            this.storeFormDataInIDB(payload).then(() => this.registerForSync());
          } else {
            this.displayNotification('Upsie! Something went really wrong 😢');
          }
        }
      });
  }

  private async storeFormDataInIDB(formData: any) {
    try {
      if (!this.dbRef) {
        this.dbRef = await this.idb.createObjectStore(this.FORM_DB_NAME, [this.FORM_TABLE_NAME]);
      }
      await this.idb.insert(this.dbRef!, this.FORM_TABLE_NAME, formData);
    } catch (error) {
      console.error('Error while storing form data: ', error)
    }
  }

  private registerForSync() {
    // Need to cast to any since background-sync is still draft and 
    // typings aren't available in typescript yet.
    // https://wicg.github.io/background-sync/spec/
    navigator.serviceWorker.ready
      .then((registration: any) => {
        return registration.sync.register('syncFormData');
      })
      .catch((error) => console.error('Error while registering the sync', error));
  }

  displayNotification(text: string) {
    this.snackBar.open(text, 'X', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  saveFormToIDb() {
    // Save the form data to IndexedDB
    const openRequest = window.indexedDB.open('FormData', 1);
  }
}

