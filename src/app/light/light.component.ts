import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss'],
})
export class LightComponent implements OnInit {
  ambient: 'dark' | 'bright' = 'bright';
  statusText: string | undefined;
  luxValue: number | undefined;

  ngOnInit(): void {
    if ('AmbientLightSensor' in window) {
      try {
        const sensor = new (window as any).AmbientLightSensor();
        sensor.onreading = () => {
          this.updateTheme(sensor.illuminance);
        };
        sensor.onerror = (event: any) => {
          if (event.error.name === 'NotAllowedError') {
            this.statusText = 'Permission to access sensor was denied.';
          } else if (event.error.name === 'NotReadableError') {
            this.statusText = 'Cannot connect to the sensor.';
          }
          console.log(event.error.name, event.error.message);
        };
        sensor.start();
      } catch (err) {
        console.error(err.name, err.message);
      }
    } else {
      this.statusText =
        'Your browser doesn\'t support Ambient Device Light Sensor';
    }
  }

  private updateTheme(luxValue: number): void {
    /*
    10 ~ 50 lux : Dim Environment
    100 ~ 1000 lux : Normal
    > 10000 lux : Bright
    */
    if (luxValue <= 50) {
      this.ambient = 'dark';
    } else {
      this.ambient = 'bright';
    }
    this.luxValue = luxValue;
    alert(`this.luxValue: ${this.luxValue} -- this.ambient: ${this.ambient}`);
  }
}
