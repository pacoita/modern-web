import { Component, OnInit, HostListener } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss'],
})
export class LightComponent implements OnInit {
  ambient: 'dark' | 'bright' = 'bright';
  unsupportedText: string | undefined;
  luxValue$ = new ReplaySubject<number>(1);

  @HostListener('window:devicelight', ['$event'])
  private async onDeviceLightChange(event: DeviceLightEvent): Promise<void> {
    this.updateLight(event.value);
  }

  ngOnInit(): void {
    if ('AmbientLightSensor' in window && 'ondevicelight' in window) {
      try {
        const sensor = new (window as any).AmbientLightSensor();
        sensor.addEventListener('reading', (event: any) => {
          this.updateLight(sensor.illuminance);
        });
        sensor.start();
      } catch (err) {
        console.error(err.name, err.message);
      }
    } else {
      this.unsupportedText =
        'Your browser doesn\'t support Ambient Device Light Sensor API';
    }
  }

  private updateLight(luxValue: number): void {
    /*
    10 ~ 50 lux : Dim Environment
    100 ~ 1000 lux : Normal
    > 10000 lux : Bright
    */
    if (luxValue < 50) {
      console.log({ event });
      this.ambient = 'dark';
    } else {
      console.log({ event });
      this.ambient = 'bright';
    }
    this.luxValue$.next(luxValue);
  }
}
