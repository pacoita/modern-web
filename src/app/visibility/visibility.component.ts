import { Component, OnInit, AfterViewInit, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-visibility',
  templateUrl: './visibility.component.html',
  styleUrls: ['./visibility.component.scss']
})
export class VisibilityComponent implements OnInit, AfterViewInit {
  apiSupported = false;

  @ViewChild('videoElement')
  videoElement: ElementRef | undefined;

  nativeElement: HTMLVideoElement | undefined;

  // Play/pause the video according to the document visibility state.
  @HostListener('document:visibilitychange', ['$event'])
  private async onVisibilyChange(event: Event): Promise<void> {
    if (document.hidden) {
      this.nativeElement?.pause();
      console.log('Video is paused.');
    } else {
      this.nativeElement?.play();
      console.log('Video is playing again.');
    }
  }

  ngOnInit(): void {
    if (typeof document.hidden !== 'undefined') {
      this.apiSupported = true;
    }
  }

  ngAfterViewInit(): void {
    if (this.apiSupported === undefined) {
      alert('Your browser does not support Page Visibility API.');
    } else {
      // Updates the page title according to the video status.
      this.nativeElement = this.videoElement?.nativeElement;
      this.nativeElement?.addEventListener(
        'pause', () => {
          document.title = 'Pause!';
        }, false
      );
      this.nativeElement?.addEventListener(
        'play', () => {
          document.title = 'Play!';
        },
        false
      );
    }
  }
}
