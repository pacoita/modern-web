import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-orientation',
  templateUrl: './orientation.component.html',
  styleUrls: ['./orientation.component.scss']
})
export class OrientationComponent {

  isActive = false;
  mess = 'INIT';
  showDetails = false;
  sup = false;

  x: number | undefined;

  constructor() {
    // if (window.DeviceOrientationEvent) {
    //   this.sup = true;
    //   window.addEventListener(
    //     "deviceorientation",
    //     (event) => {
    //       const frontToBack = event.beta || 0; // beta: front back motion
    //       this.doLogic(Math.round(frontToBack));
    //     },
    //     true,
    //   );
    // } else {
    //   this.sup = false;
    //   this.mess = "Sorry, your browser doesn't support Device Orientation";
    // }
  }

  @HostListener('window:deviceorientation', ['$event'])
  private onOrientationChange(event: DeviceOrientationEvent) {
    let x = event.beta || 0; // In degree in the range [-180,180)
    this.doLogic(x);

  }

  doLogic(x: number) {
    this.mess = 'inside';
    // To prevent the cases when the device is upside down
    // the x value is limited

    if (x < -40) {
      x = 0;
    }
    this.x = x;
    console.log('current value: ', x);
    if (!x) {
      return;
    }

    if (x > 160) {
      this.isActive = true;
      this.mess = '' + x;
      console.log('Activate: ', x);
    } else if (x < 70 && this.isActive) {
      this.isActive = false;
      this.showDetails = !this.showDetails;
      console.log('toggle: ', x);
    }
  }

}
