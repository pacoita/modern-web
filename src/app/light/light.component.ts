import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss'],
})
export class LightComponent implements OnInit {
  ambient: 'dark' | 'bright' = 'bright';
  supportedText: string | undefined;
  errorText: string | undefined;
  luxValue: number | undefined;
  private sensor: any;

  constructor(private cdRef: ChangeDetectorRef, private titleService: Title) {
    this.titleService.setTitle('Ambient light');
  }

  ngOnInit(): void {
    if ('AmbientLightSensor' in window) {
      this.readAmbientLight();
    } else {
      this.supportedText =
        'Your browser does not support Ambient Device Light Sensor 😢';
    }
  }

  private readAmbientLight(): void {
    try {
      this.sensor = this.sensor ?? new (window as any).AmbientLightSensor();

      this.sensor.onerror = async (event: any) => {
        // Ask for permissions if not granted yet
        if (event.error.name === 'NotAllowedError') {
          // https://github.com/microsoft/TypeScript/issues/33923#issuecomment-911409125
          const permissionName = 'ambient-light-sensor' as PermissionName;

          // The "permissions" object provides access to the Permissions API... yet another API :)
          const result = await navigator.permissions.query({
            name: permissionName,
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

      // Light value changes will be registered
      this.sensor.onreading = () => {
        this.updateTheme(this.sensor.illuminance);
      };

      // We start "reading" light values
      this.sensor.start();
    } catch (err) {
      this.errorText = `An error occurred.`;
      console.error(err);
    }
  }

  private updateTheme(luxValue: number): void {
    /*
    10 ~ 50 lux     Dark Environment
    100 ~ 1000 lux  Normal
    > 10000 lux     Bright Environment
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
