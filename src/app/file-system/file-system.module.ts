import { NgMaterialModule } from './../ng-material/ng-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileSystemRoutingModule } from './file-system-routing.module';
import { FileSystemComponent } from './file-system.component';


@NgModule({
  declarations: [FileSystemComponent],
  imports: [
    CommonModule,
    FileSystemRoutingModule,
    NgMaterialModule
  ]
})
export class FileSystemModule { }
