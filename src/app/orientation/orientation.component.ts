import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-orientation',
  templateUrl: './orientation.component.html',
  styleUrls: ['./orientation.component.scss']
})
export class OrientationComponent {

  isActive = false;
  showDetails = false;

  @HostListener('window:deviceorientation', ['$event'])
  private onOrientationChange(event: DeviceOrientationEvent): void {
    // event.beta value is given in degree in the range [-180,180)
    let xValue = event.beta;
    if (!xValue) {
      return;
    }

    // To prevent the cases when the device is upside down the x value is partially limited
    if (xValue < -40) {
      xValue = 0;
    }

    // Here 70 and 160 degrees values are respectively the threshold to trigger the details toggling and the threshold to reset the flag.
    // These values allow to enable the demo logic and still be "comfortable" while using the mobile device.
    if (xValue > 160) {
      // The device is facing down, set isActive to true to trigger details toggling once position is restored
      this.isActive = true;
    } else if (xValue < 70 && this.isActive) {
      // If the device is no more upside down and isActive is true, toggle the details and reset the flag
      this.isActive = false;
      this.showDetails = !this.showDetails;
    }
  }
}
