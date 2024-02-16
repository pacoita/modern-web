import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { NgClass, NgIf } from '@angular/common';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

enum WebCapability {
  camera = 'camera',
  share = 'share',
  fileSystem = 'fileSystem',

}

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
  mediaDevices: MediaDevices | undefined;

  webCapabilities: {[apieKey: string]: boolean} = {};

  webCapability = WebCapability;

  /**
   * TODO: Add share API
   * - File System API to save the picture
   * - Share API to share the picture
   */

  constructor(private titleService: Title) {
    this.titleService.setTitle('Camera API');
    this.mediaDevices = navigator.mediaDevices;
    this.webCapabilities[WebCapability.camera] = !!this.mediaDevices;
    this.webCapabilities[WebCapability.share] = 'share' in navigator;
    this.webCapabilities[WebCapability.fileSystem] = 'showOpenFilePicker' in window;
  }

  async ngAfterViewInit() {
    if (this.mediaDevices) {
      this.videoEl = this.videoElement?.nativeElement as HTMLVideoElement
      try {
        // We get the media stream from the camera
        const stream = await this.mediaDevices.getUserMedia({ video: true, audio: false })
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

  async savePhoto(){
    try {
      this.canvas?.nativeElement.toBlob(async (blob: Blob) => {
        // Show the file save dialog.
        const handle = await (window as any).showSaveFilePicker({suggestedName: 'photo_shot.jpg'});
        // Write the blob to the file.
        const writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
        return;
      });
    } catch (error) {
        console.error(error);
    }
  }

  share(){
    try {
      const url = this.videoEl?.currentSrc;
      navigator.share({
        title: 'My photo',
        text: 'Check out my photo',
        url: url
      });
    } catch (error) {
      this.errorText = `An error occurred while sharing the photo`;
      console.error(error);
    } 
  }
}
