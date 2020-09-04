import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VibrationRoutingModule } from './vibration-routing.module';
import { VibrationComponent } from './vibration.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [VibrationComponent],
  imports: [
    CommonModule,
    VibrationRoutingModule,
    NgMaterialModule,
    ReactiveFormsModule
  ]
})
export class VibrationModule { }
