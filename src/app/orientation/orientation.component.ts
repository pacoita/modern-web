import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-orientation',
  templateUrl: './orientation.component.html',
  styleUrls: ['./orientation.component.scss']
})
export class OrientationComponent {

  isActive = false;

  x: number | undefined;

  @HostListener('window:deviceorientation', ['$event'])
  private async onOrientationChange(event: any): Promise<void> {
      let x = event.beta; // In degree in the range [-180,180)
   
      console.log('current value: ', x);
      
      if (x > 160) {
        this.isActive = true;
        console.log('Activate: ', x);
      } else if (x < 100 && this.isActive) {
        this.isActive = false;
        console.log('toggle: ', x);
      }
    
  }

}
