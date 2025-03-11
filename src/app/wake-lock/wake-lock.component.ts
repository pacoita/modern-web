import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgIf, NgClass } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-wake-lock',
    templateUrl: './wake-lock.component.html',
    styleUrls: ['./wake-lock.component.scss'],
    imports: [
        MatCardModule,
        NgIf,
        MatCheckboxModule,
        FormsModule,
        NgClass,
        MatExpansionModule,
    ]
})
export class WakeLockComponent implements OnInit, OnDestroy {
  isSentinelActive = false;
  lockEnabled = false;
  reGetLock = false;
  unsupportedText: string | undefined;
  errorText: string | undefined;
  private wakeLockSentinel: any;

  // The Visibility API triggers this event
  @HostListener('document:visibilitychange', ['$event'])
  private async onVisibilyChange(event: Event): Promise<void> {
    if (
      this.wakeLockSentinel !== null &&
      document.visibilityState === 'visible' &&
      this.reGetLock
    ) {
      await this.requestWakeLock();
      console.log('Wake Lock has been re-acquired');
    }
  }

  constructor(private titleService: Title) {
    this.titleService.setTitle('Wake Lock');
  }

  ngOnInit(): void {
    if (!('wakeLock' in navigator)) {
      this.unsupportedText =
        'Snap! Screen Wake lock is not supported by your browser.';
    }
  }

  // 1. The wake lock can be requested ONLY after a user interaction (here --> checkbox click)
  async lockEnabledChange(lockEnabled: boolean): Promise<void> {
    if (lockEnabled) {
      await this.requestWakeLock();
    } else {
      // Checkbox is cleared --> release lock
      this.reGetLock = false;
      await this.releaseLock();
    }
  }

  // 2. Request a screen wake lock
  private async requestWakeLock(): Promise<void> {
    try {
      // 'screen' is currently the only type of wake lock.
      // 'system' type, preventing the CPU to suspend, has been removed.
      this.wakeLockSentinel = await (navigator as any).wakeLock.request(
        'screen'
      );

      // 3. From this moment we have the screen locked!

      // The screen wake lock is automatically released when we minimize a window
      // or open a new browser tab when a screen wake lock is active.
      this.wakeLockSentinel.addEventListener('release', () => {
        // `isSentinelActive` is just to reflect the sentinel state in the UI
        this.isSentinelActive = false;
        console.log('Wake Lock has been released...');
      });

      this.isSentinelActive = true;
    } catch (err) {
      // The browser can refuse the wake lock request if the device has low battery, for instance.
      this.isSentinelActive = false;
      this.errorText = `An error occurred.`;
      console.error(err);      
    }
  }

  /**
   * 4. Release the screen wake lock
   */
  private async releaseLock(): Promise<void> {
    await this.wakeLockSentinel
      ?.release()
      .catch((err: any) => (this.errorText = `${err.name}, ${err.message}`));
    this.wakeLockSentinel = null;
    this.isSentinelActive = false;
  }
  async ngOnDestroy(): Promise<void> {
    await this.releaseLock();
  }
}
