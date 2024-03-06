import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Component, DestroyRef, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-background-sync',
  standalone: true,
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

  registrationForm = this.fb.group({
    firstname: '',
    lastname: '',
    email: '',
    feedback: ''
  });

  constructor() {
    if (!('serviceWorker' in navigator) && !('SyncManager' in window)) {
      this.unsupportedText = 'Your browser does not support the Background Sync API and/or Service Workers.';
    }
  }

  submit() {
    const payload = this.registrationForm.value;
    this.http.post('http://localhost:3000/back-sync/form-data', payload)
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: () => {
          this.displayNotification('Form data has been delivered! ✅');
        },
        error: (error: HttpErrorResponse) => {
          console.log('Error while sending the form data', error);
          
          if (error.status === 504) {
            this.displayNotification('🔥 You are OFFLINE 🔥 We will send the data when you are back online 📡');
            this.registerForSync();
          } else {
            this.displayNotification('Upsie! Something went really wrong 😢');
          }
        }
      });
  }

  registerForSync() {    
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

}

