import { NgMaterialModule } from './../ng-material/ng-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactPickerRoutingModule } from './contact-picker-routing.module';
import { ContactPickerComponent } from './contact-picker.component';


@NgModule({
    imports: [
        CommonModule,
        ContactPickerRoutingModule,
        NgMaterialModule,
        ContactPickerComponent
    ]
})
export class ContactPickerModule { }
