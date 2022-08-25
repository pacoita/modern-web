import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BatteryComponent implements OnInit {

  supportedText?: string;
  batteryStats?: any; //TODO: type
  errorText?: string;
  chargingTime?: number;
  dischargingTime?: number;

  constructor(private cd: ChangeDetectorRef) { }

  async ngOnInit(): Promise<void> {
    const batteryManager = (<any>navigator).getBattery();
    if (batteryManager) {
      try {
        this.batteryStats = await batteryManager;
        console.log('all ', this.batteryStats);
        this.dischargingTime = this.batteryStats.dischargingTime / 60;

        this.batteryStats.ondischargingtimechange = () => {
          console.log('ondischargingtimechange', this.batteryStats);
          this.dischargingTime = this.batteryStats.dischargingTime / 60;
          this.cd.detectChanges();
        }

        this.batteryStats.onlevelchange = () => {
          console.log('LEVEL CHANGE', this.batteryStats.level * 100);

          if (this.batteryStats.charging) {
            this.chargingTime = this.batteryStats.chargingTime / 60;
            console.log(`Charging time: ${this.chargingTime} minutes`);
          } else {
            this.dischargingTime = this.batteryStats.dischargingTime / 60;
            console.log(`Disharging time: ${this.dischargingTime} minutes`);
          }
            this.cd.detectChanges();
        }
      } catch(error: any) {
        console.error(error);
        this.errorText = 'An error occurred while reading the battery info.';
      }
    } else {
      this.supportedText =
        'Your browser does not support the Battery Status API';
    }
  }

}
