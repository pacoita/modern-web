import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WakeLockComponent } from './wake-lock.component';

const routes: Routes = [{ path: '', component: WakeLockComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WakeLockRoutingModule { }
