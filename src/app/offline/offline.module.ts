import { NgMaterialModule } from './../ng-material/ng-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfflineRoutingModule } from './offline-routing.module';
import { OfflineComponent } from './offline.component';


@NgModule({
    imports: [
        CommonModule,
        OfflineRoutingModule,
        NgMaterialModule,
        OfflineComponent
    ]
})
export class OfflineModule { }
