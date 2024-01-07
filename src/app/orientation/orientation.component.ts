import { Component, HostListener } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-orientation',
    templateUrl: './orientation.component.html',
    styleUrls: ['./orientation.component.scss'],
    standalone: true,
    imports: [MatCardModule, MatExpansionModule]
})
export class OrientationComponent {

  isActive = false;
  showDetails = false;
  sup = false;

  @HostListener('window:deviceorientation', ['$event'])
  private onOrientationChange(event: DeviceOrientationEvent) {
    // event.beta value is given in degree in the range [-180,180)
    this.doLogic(event.beta || 0);
  }

  doLogic(xValue: number) {
    if (!xValue) {
      return;
    }

    // To prevent the cases when the device is upside down the x value is partially limited
    if (xValue < -40) {
      xValue = 0;
    }

    if (xValue > 160) {
      this.isActive = true;
    } else if (xValue < 70 && this.isActive) {
      this.isActive = false;
      this.showDetails = !this.showDetails;
    }
  }

}
