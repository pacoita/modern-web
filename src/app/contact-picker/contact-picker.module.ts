import { NgMaterialModule } from './../ng-material/ng-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactPickerRoutingModule } from './contact-picker-routing.module';
import { ContactPickerComponent } from './contact-picker.component';


@NgModule({
  declarations: [ContactPickerComponent],
  imports: [
    CommonModule,
    ContactPickerRoutingModule,
    NgMaterialModule
  ]
})
export class ContactPickerModule { }
