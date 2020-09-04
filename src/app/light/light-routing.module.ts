import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LightComponent } from './light.component';

const routes: Routes = [{ path: '', component: LightComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LightRoutingModule { }
