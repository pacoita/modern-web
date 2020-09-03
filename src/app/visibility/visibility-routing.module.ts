import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisibilityComponent } from './visibility.component';

const routes: Routes = [{ path: '', component: VisibilityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisibilityRoutingModule { }
