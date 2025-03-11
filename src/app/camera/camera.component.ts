import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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
    imports: [
        NgClass,
        MatCardModule,
        NgIf,
        MatExpansionModule,
    ]
})
export class CameraCaptureComponent implements OnInit, AfterViewInit {

  // TODO: Wrap props in model DTOs
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
  webCapabilities: { [apieKey: string]: boolean } = {};
  webCapability = WebCapability;
  screenOrientation: 'portrait' | 'landscape' | undefined;
  xValue: number = 0;
  zValue: number = 0;
  isActive_GAMMA = false;
  isActive_BETA = false;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Camera API');
    this.webCapabilities[WebCapability.share] = 'share' in navigator;
    this.webCapabilities[WebCapability.fileSystem] = 'showOpenFilePicker' in window;
  }

  ngOnInit(): void {
    // The matchMedia method from the Window's interface returns an object of type MediaQueryList. 
    // This object can be checked to verify if the document the target media query has a match.
    let portrait = window.matchMedia("(orientation: portrait)");

    // We set the initial screen orientation
    portrait.matches ? this.screenOrientation = "portrait" : this.screenOrientation = "landscape";

    // We listen to the device screen orientation changes
    portrait.addEventListener("change", (e) => {
      if (e.matches) {
        // Portrait mode
        this.screenOrientation = "portrait";
      } else {
        // Landscape mode
        this.screenOrientation = "landscape";
      }
    })
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

  timerShot(timeSecs: number = 3) {
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

  async savePhoto() {
    try {
      this.canvas?.nativeElement.toBlob(async (blob: Blob) => {
        // Show the file save dialog.
        const handle = await (window as any).showSaveFilePicker({ suggestedName: 'photo_shot.jpg' });
        // Write the blob to the file.
        const writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
      });
    } catch (error) {
      console.error(error);
    }
  }

  share() {
    try {
      this.canvas?.nativeElement.toBlob(async (blob: Blob) => {
        const photoFile = new File([blob],
          'demo_shot.jpg',
          {
            type: "image/jpeg",
            lastModified: new Date().getTime()
          }
        );
        const url = 'https://github.com/pacoita/modern-web';
        navigator.share({
          title: 'My photo',
          text: 'Check out my photo',
          url: url,
          files: [photoFile],
        });
      });
    } catch (error) {
      this.errorText = `An error occurred while sharing the photo`;
      console.error(error);
    }
  }

  @HostListener('window:deviceorientation', ['$event'])
  private onOrientationChange(event: DeviceOrientationEvent): void {
    // Optimizations like limiting the frequence of sampling
    // and resetting the active flags when the orientation changes are omitted here in the demo.

    if (this.screenOrientation === "landscape") {
      /**
       * Landscape case is slightly more complex than the portrait one. In this case, the gamma values range to
       * consider is different whether the user holds the device with the right or left hand. We need to determine 
       * here the side of the device first to handle the gamma value correctly.
       */

      // event.gamma value is given in degree in the range [-90, 90)
      this.zValue = Math.round(event.gamma ?? 0);
      const orientation = screen.orientation.type;

      const isRightHand = orientation === "landscape-primary";
      const isLeftHand = orientation === "landscape-secondary";
      const isActiveRange = this.zValue <= -40 || this.zValue >= 40;

      if ((this.zValue < 40 && this.zValue > 0 && isRightHand) || (this.zValue > -40 && this.zValue < 0 && isLeftHand)) {
        // The device is facing down 
        // The flag isActive_GAMMA is set to true to trigger the timer shot once position is restored
        this.isActive_GAMMA = true;
      } else if (isActiveRange && this.isActive_GAMMA) {
        // The device is now facing towards the user
        // If the flag isActive_GAMMA is true, start the timer shot and reset the flag
        this.isActive_GAMMA = false;
        this.timerShot();
      }
    } else {
      // event.beta value is given in degree in the range [-180,180)
      this.xValue = Math.round(event.beta ?? 0);

      const isExcludedRange = this.xValue < -40 && this.xValue > -130;
      const isActiveRange = this.xValue >= -40 && this.xValue <= 80;

      // To exclude the cases when the device is upside down the x value is partially limited
      if (isExcludedRange) {
        this.xValue = 0;
      }

      // 80 and 160 values are respectively the threshold to trigger the details toggling and to reset the flag.
      // These values allow enabling the demo logic, while still remaining "comfortable" for the user.
      if (this.xValue > 160) {
        // The device is facing down 
        // The flag isActive_BETA is set to true to trigger the timer shot once position is restored
        this.isActive_BETA = true;
      } else if (isActiveRange && this.isActive_BETA) {
        // The device is now facing up
        // If the flag isActive_GAMMA is true, start the timer shot and reset the flag
        this.isActive_BETA = false;
        this.timerShot();
      }
    }
  }

}
