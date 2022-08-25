import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgMaterialModule } from '../ng-material/ng-material.module';

import { BatteryRoutingModule } from './battery-routing.module';
import { BatteryComponent } from './battery.component';


@NgModule({
  declarations: [
    BatteryComponent
  ],
  imports: [
    CommonModule,
    BatteryRoutingModule,
    NgMaterialModule
  ]
})
export class BatteryModule { }
