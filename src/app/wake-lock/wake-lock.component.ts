import { WakeLockModule } from './wake-lock.module';
import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-wake-lock',
  templateUrl: './wake-lock.component.html',
  styleUrls: ['./wake-lock.component.scss'],
})
export class WakeLockComponent implements OnInit, OnDestroy {
  isSupported = false;
  isSentinelActive = false;
  lockEnabled = false;
  reGetLock = false;
  supportText: string | undefined = undefined;
  errorText: string | undefined = undefined;
  private wakeLock: any;

  @HostListener('document:visibilitychange', ['$event'])
  private async onVisibilyChange(event: Event): Promise<void> {
    if (this.wakeLock !== null && document.visibilityState === 'visible' && this.reGetLock) {
      this.requestWakeLock();
      console.log('Wake Lock has been reacquired');
    }
  }

  constructor() {}

  ngOnInit(): void {
    if ('wakeLock' in navigator) {
      this.isSupported = true;
    } else {
      this.isSupported = false;
      this.supportText = 'Snap! Screen Wake lock is not supported by your browser.';
    }
  }

  ngOnDestroy(): void {
    this.releaseLock();
  }

  lockEnabledChange(lockEnabled: boolean): void {
    if (lockEnabled) {
      this.requestWakeLock();
    } else {
      this.reGetLock = false;
      this.releaseLock();
    }
  }

  /**
   * Request a screen wake lock.
   * @returns WakeLockSentinel object
   */
  private async requestWakeLock(): Promise<void> {
    try {
      // Cast currently needed to avoid typescript error due to missing typings
      // 'screen' is currently the only type of wake lock
      this.wakeLock = await (navigator as any).wakeLock.request('screen');

      // The screen wake lock is released when we minimize a tab/window
      // or navigate away when a screen wake lock is active.
      this.wakeLock.addEventListener('release', () => {
        this.isSentinelActive = false;
        // The wake lock has been released if we leave or minimise the current page.
        console.log('Wake Lock has been released...');
      });
      this.isSentinelActive = true;
    } catch (err) {
      // The browser can refuse the request if the device has low battery left, for instance.
      this.isSentinelActive = false;
      this.errorText = `${err.name}, ${err.message}`;
    }
  }

  /**
   * Release the screen wake lock
   */
  private releaseLock(): void {
    this.wakeLock?.release().then(() => {
      this.wakeLock = null;
      this.isSentinelActive = false;
    });
  }
}
