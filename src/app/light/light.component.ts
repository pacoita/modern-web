import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss']
})
export class LightComponent implements OnInit {

  ambient: 'dark' | 'bright' = 'bright';
  unsupportedText: string | undefined;
  lightValue = 0;

  @HostListener('window:devicelight', ['$event'])
  private async onDeviceLightChange(event: DeviceLightEvent): Promise<void> {
    this.lightValue = event.value;
    if (event.value < 50) {
      console.log({event});
      this.ambient = 'dark';
    } else {
      this.ambient = 'bright';
    }
  }

  ngOnInit(): void {
    if (!('ondevicelight' in window)) {
      this.unsupportedText = 'Your browser does not support Ambient Device Light events';
    } else {
      window.addEventListener('devicelight', (event) => {
        console.log({event});
        if (event.value < 50) {
        } else {
        }
      });
    }
  }
}
