import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileSystemComponent } from './file-system.component';

const routes: Routes = [{ path: '', component: FileSystemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileSystemRoutingModule { }
