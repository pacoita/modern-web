import { NgMaterialModule } from './../ng-material/ng-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileSystemRoutingModule } from './file-system-routing.module';
import { FileSystemComponent } from './file-system.component';


@NgModule({
    imports: [
        CommonModule,
        FileSystemRoutingModule,
        NgMaterialModule,
        FileSystemComponent
    ]
})
export class FileSystemModule { }
