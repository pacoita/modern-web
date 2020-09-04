import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VibrationComponent } from './vibration.component';

const routes: Routes = [{ path: '', component: VibrationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VibrationRoutingModule { }
