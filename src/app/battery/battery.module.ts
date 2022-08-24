import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatteryRoutingModule } from './battery-routing.module';
import { BatteryComponent } from './battery.component';


@NgModule({
  declarations: [
    BatteryComponent
  ],
  imports: [
    CommonModule,
    BatteryRoutingModule
  ]
})
export class BatteryModule { }
