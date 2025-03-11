import { Component, HostListener } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-orientation',
    templateUrl: './orientation.component.html',
    styleUrls: ['./orientation.component.scss'],
    imports: [MatCardModule, MatExpansionModule, MatCheckboxModule, FormsModule]
})
export class OrientationComponent {

  isActive = false;
  showDetails = false;
  showDegrees = false;
  xValue: number = 0;

  @HostListener('window:deviceorientation', ['$event'])
  private onOrientationChange(event: DeviceOrientationEvent): void {
    // event.beta value is given in degree in the range [-180,180)
    this.xValue = Math.round(event.beta ?? 0);

    const isExcludedRange = this.xValue < -40 && this.xValue > -130;
    const isActiveRange = this.xValue >= -40 && this.xValue < 50;

    // To exclude the cases when the device is upside down the x value is partially limited
    if (isExcludedRange) {
      this.xValue = 0;
    }

    // 50 and 160 values are respectively the threshold to trigger the details toggling and to reset the flag.
    // These values allow enabling the demo logic, while still remaining "comfortable" for the user.
    if (this.xValue > 160) {
      // The device is facing down 
      // The flag isActive set to true to trigger details toggling once position is restored
      this.isActive = true;
    } else if (isActiveRange && this.isActive) {
      // The device is now facing up
      // If the flag isActive is true, toggle the details and reset the flag
      this.isActive = false;
      this.showDetails = !this.showDetails;
    }
  }
}
