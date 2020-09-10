import { Component, OnInit } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss'],
})
export class LightComponent implements OnInit {
  ambient: 'dark' | 'bright' = 'bright';
  statusText: string | undefined;
  private luxValueSub = new ReplaySubject<number>(1);
  luxValue$ = this.luxValueSub.asObservable();

  ngOnInit(): void {
    if ('AmbientLightSensor' in window) {
      this.readAmbientLight();
    } else {
      this.statusText =
        'Your browser doesn\'t support Ambient Device Light Sensor';
    }
  }

  private readAmbientLight(): void {
    try {
      const sensor = new (window as any).AmbientLightSensor();
      sensor.onerror = async (event: any) => {
        if (event.error.name === 'NotAllowedError') {
          // Ask for permissions if not granted yet
          const result = await navigator.permissions.query({
            name: 'ambient-light-sensor',
          });
          // state -> prompt | granted | denied
          if (result.state === 'denied') {
            this.statusText = 'Permission to access sensor was denied.';
            return;
          }
          this.readAmbientLight();
        } else if (event.error.name === 'NotReadableError') {
          this.statusText = 'Cannot connect to the sensor.';
        }
      };
      sensor.onreading = () => {
        this.updateTheme(sensor.illuminance);
      };
      sensor.start();
    } catch (err) {
      console.error(err.name, err.message);
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
    this.luxValueSub.next(luxValue);
  }
}
