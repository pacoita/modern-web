import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { NgClass, NgIf } from '@angular/common';
import { timer } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-light',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
  standalone: true,
  imports: [
    NgClass,
    MatCardModule,
    NgIf,
    MatExpansionModule,
  ],
})
export class CameraCaptureComponent implements OnInit {
  supportedText: string | undefined;
  errorText: string | undefined;
  timerSeconds: number | undefined;

  @ViewChild('videoElement')
  videoElement: ElementRef | undefined;

  /**
   * TODO: Add share API
   * - Timer (API ?) for self shot
   * - File System API to save the picture
   * - Share API to share the picture
   */

  constructor(private titleService: Title) {
    this.titleService.setTitle('Camera API');
  }

  async ngOnInit() {
    const mediaDevices = navigator.mediaDevices;
    if (mediaDevices) {
      this.initVideoSettings();
      try {
        const stream = await mediaDevices.getUserMedia({ video: true, audio: false })
        const videoEl = this.videoElement?.nativeElement as HTMLVideoElement;
        // We set the stream as source to our <video> element in the template
        videoEl.srcObject = stream;
        // We invoke the play method to start the video
        videoEl.play();
      } catch (error) {
        // We land in error also if the user denies the access to the camera
        console.error(`An error occurred while fetching the media stream: ${error}`);
      }
    } else {
      this.supportedText =
        'Your browser does not support the Camera API 😢';
    }
  }
  initVideoSettings() {

  }

  takePhoto() {
    console.log('Take photo');
  }

  timerShot(timeSecs: number = 5) {
    console.log('Take photo with timer');
    timer(0, 1000).pipe(
      take(timeSecs),
      map(secondsElapsed => 300 - secondsElapsed)
    ).subscribe(secondsLeft => {
      this.timerSeconds = secondsLeft;
    });
  }
}
