import { NgMaterialModule } from './../ng-material/ng-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightRoutingModule } from './light-routing.module';
import { LightComponent } from './light.component';


@NgModule({
    imports: [
        CommonModule,
        LightRoutingModule,
        NgMaterialModule,
        LightComponent
    ]
})
export class LightModule { }
