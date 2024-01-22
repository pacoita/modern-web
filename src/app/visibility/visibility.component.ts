import { Component, AfterViewInit, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-visibility',
    templateUrl: './visibility.component.html',
    styleUrls: ['./visibility.component.scss'],
    standalone: true,
    imports: [MatCardModule, MatExpansionModule]
})
export class VisibilityComponent implements AfterViewInit {

  @ViewChild('videoElement')
  videoElement: ElementRef | undefined;

  nativeElement: HTMLVideoElement | undefined;

  // 1. Play/pause the video according to the document visibility state
  @HostListener('document:visibilitychange', ['$event'])
  private onVisibilyChange(event: Event): void {
    if (document.hidden) {
      this.nativeElement?.pause();
      console.log('Video is paused.');
    } else {
      this.nativeElement?.play();
      console.log('Video is playing again.');
    }
  }
  constructor(private titleService: Title) {
    this.titleService.setTitle('Visibility');
  }

  ngAfterViewInit(): void {
    if (typeof document.hidden === undefined) {
      alert('Your browser does not support Page Visibility API.');
    } else {
      // 2. Updates the page title according to the video status for the sake of the demo
      this.nativeElement = this.videoElement?.nativeElement;
      this.nativeElement?.addEventListener(
        'pause', () => {
          document.title = 'Pause!';
        }
      );
      this.nativeElement?.addEventListener(
        'play', () => {
          document.title = 'Play!';
        }
      );
    }
  }
}
