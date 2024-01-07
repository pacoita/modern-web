import { NgMaterialModule } from './../ng-material/ng-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WakeLockRoutingModule } from './wake-lock-routing.module';
import { WakeLockComponent } from './wake-lock.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        WakeLockRoutingModule,
        NgMaterialModule,
        FormsModule,
        WakeLockComponent
    ]
})
export class WakeLockModule { }
