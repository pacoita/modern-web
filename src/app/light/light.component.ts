import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss']
})
export class LightComponent implements OnInit {
  ambient: 'dark' | 'bright' = 'bright';
  supportedText: string | undefined;
  errorText: string | undefined;
  luxValue: number | undefined;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    if ('AmbientLightSensor' in window) {
      this.readAmbientLight();
    } else {
      this.supportedText =
        'Your browser does not support Ambient Device Light Sensor';
    }
  }

  private readAmbientLight(): void {
    try {
      const sensor = new (window as any).AmbientLightSensor();
      sensor.onerror = async (event: any) => {
        // Ask for permissions if not granted yet
        if (event.error.name === 'NotAllowedError') {
          // The permission object here provides access to the Permissions API functionality :)
          const result = await navigator.permissions.query({
            name: 'ambient-light-sensor',
          });
          // state -> prompt | granted | denied
          if (result.state === 'denied') {
            this.errorText = 'Permission to access sensor was denied.';
            this.luxValue = undefined;
            return;
          }
          this.readAmbientLight();
        } else if (event.error.name === 'NotReadableError') {
          this.errorText = 'Cannot connect to the sensor.';
        }
        this.luxValue = undefined;
      };
      sensor.onreading = () => {
        this.updateTheme(sensor.illuminance);
      };
      sensor.start();
    } catch (err) {
      this.errorText = `${err.name} -- ${err.message}`;
    }
  }

  private updateTheme(luxValue: number): void {
    /*
    10 ~ 50 lux  Dim Environment
    100 ~ 1000 lux  Normal
    > 10000 lux  Bright
    */
    if (luxValue <= 50) {
      this.ambient = 'dark';
    } else {
      this.ambient = 'bright';
    }
    this.luxValue = luxValue;
    this.cdRef.detectChanges();
  }
}
