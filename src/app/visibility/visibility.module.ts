import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisibilityRoutingModule } from './visibility-routing.module';
import { VisibilityComponent } from './visibility.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';


@NgModule({
  declarations: [VisibilityComponent],
  imports: [
    CommonModule,
    VisibilityRoutingModule,
    NgMaterialModule
  ]
})
export class VisibilityModule { }
