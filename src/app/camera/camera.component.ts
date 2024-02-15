import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
export class CameraCaptureComponent implements AfterViewInit {
  supportedText: string | undefined;
  errorText: string | undefined;
  timerSeconds: number | undefined;

  @ViewChild('videoElement')
  videoElement: ElementRef | undefined;
  videoEl: HTMLVideoElement | undefined;

  @ViewChild('canvas')
  canvas: ElementRef | undefined;

  @ViewChild('resultShot')
  photo: ElementRef | undefined;

  displayPhoto = false;


  /**
   * TODO: Add share API
   * - File System API to save the picture
   * - Share API to share the picture
   */

  constructor(private titleService: Title) {
    this.titleService.setTitle('Camera API');
  }

  async ngAfterViewInit() {
    const mediaDevices = navigator.mediaDevices;
    if (mediaDevices) {
      this.videoEl = this.videoElement?.nativeElement as HTMLVideoElement
      try {
        // We get the media stream from the camera
        const stream = await mediaDevices.getUserMedia({ video: true, audio: false })
        // We set the stream as source to our <video> element in the template
        this.videoEl.srcObject = stream;
        // We invoke the play method to start the video
        this.videoEl.play();
      } catch (error) {
        // We get an error also if the user denies the access to the camera
        console.error(`An error occurred while fetching the media stream: ${error}`);
      }
    } else {
      this.supportedText =
        'Your browser does not support the Camera API 😢';
    }
  }

  takePhoto() {
    const context = this.canvas?.nativeElement.getContext("2d");
    const height = (this.videoEl!.videoHeight / this.videoEl!.videoWidth) * 400;
    this.canvas!.nativeElement.width = 400;
    this.canvas!.nativeElement.height = height;
    context.drawImage(this.videoEl, 0, 0, 400, height);

    this.displayPhoto = true;
    const data = this.canvas?.nativeElement.toDataURL("image/png");
    this.photo?.nativeElement.setAttribute("src", data);
  }

  timerShot(timeSecs: number = 5) {
    timer(0, 1000).pipe(
      take(timeSecs + 2),
    ).subscribe(secondsElapsed => {
      this.timerSeconds = timeSecs - secondsElapsed;
      if (this.timerSeconds === 0) {
        this.takePhoto(); 
      } else if (this.timerSeconds < 0) {
        this.timerSeconds = undefined;
      }
    });
  }
}
