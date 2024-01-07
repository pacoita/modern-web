import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgMaterialModule } from '../ng-material/ng-material.module';
import { OrientationComponent } from './orientation.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: OrientationComponent }];

@NgModule({
    imports: [
        CommonModule,
        NgMaterialModule,
        RouterModule.forChild(routes),
        OrientationComponent
    ]
})
export class OrientationModule { }
