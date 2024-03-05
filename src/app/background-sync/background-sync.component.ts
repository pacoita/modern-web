import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Component, DestroyRef, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-background-sync',
  standalone: true,
  imports: [
    MatCardModule,
    NgIf,
    MatButtonModule,
    MatExpansionModule,
  ],
  templateUrl: './background-sync.component.html',
  styleUrl: './background-sync.component.scss'
})
export class BackgroundSyncComponent {
  unsupportedText: string | undefined;
  errorText: string | undefined;
  http = inject(HttpClient);
  destroyRef = inject(DestroyRef);

  constructor() {
    if (!('serviceWorker' in navigator) && !('SyncManager' in window)) {
      this.unsupportedText = 'Your browser does not support the Background Sync API and/or Service Workers.';
    }
  }

  sendFormData() {
    // TODO: Create demo form
    const formData = { name: 'John Doe', age: '30', city: 'New York City' };

    // TODO: Create local server
    this.http.post('http://localhost:3600/back-sync/post', formData)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          console.log('Form data sent successfully');
        },
        error: (error) => {
          // Filter by error type
          console.error('Error sending form data', error);
          this.registerForSync();
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

}

