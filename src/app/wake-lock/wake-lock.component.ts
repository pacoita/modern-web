import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-wake-lock',
  templateUrl: './wake-lock.component.html',
  styleUrls: ['./wake-lock.component.scss'],
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
    if (this.wakeLockSentinel !== null && document.visibilityState === 'visible' && this.reGetLock) {
      await this.requestWakeLock();
      console.log('Wake Lock has been reacquired');
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

  ngOnDestroy(): void {
    this.releaseLock();
  }

  // The wake lock can be requested ONLY after a user interaction (eg. mouse click)
  async lockEnabledChange(lockEnabled: boolean): Promise<void> {
    if (lockEnabled) {
      await this.requestWakeLock();
    } else {
      this.reGetLock = false;
      this.releaseLock();
    }
  }

  /**
   * Request a screen wake lock
   */
  private async requestWakeLock(): Promise<void> {
    try {
      // 'screen' is currently the only type of wake lock.
      // 'system' type, preventing the CPU to suspend, has been removed.
      this.wakeLockSentinel = await (navigator as any).wakeLock.request('screen');

      // The screen wake lock is released when we minimize a tab/window
      // or navigate away when a screen wake lock is active.
      this.wakeLockSentinel.addEventListener('release', () => {
        this.isSentinelActive = false;
        console.log('Wake Lock has been released...');
      });
      this.isSentinelActive = true;
    } catch (err) {
      // The browser can refuse the wake lock request if the device has low battery, for instance.
      this.isSentinelActive = false;
      this.errorText = `${err.name}, ${err.message}`;
    }
  }

  /**
   * Release the screen wake lock
   */
  private releaseLock(): void {
    this.wakeLockSentinel?.release().then(() => {
      this.wakeLockSentinel = null;
      this.isSentinelActive = false;
    })
      .catch((err: any) => (this.errorText = `${err.name}, ${err.message}`));
  }
}
