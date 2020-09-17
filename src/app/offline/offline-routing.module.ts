import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfflineComponent } from './offline.component';

const routes: Routes = [{ path: '', component: OfflineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfflineRoutingModule { }
