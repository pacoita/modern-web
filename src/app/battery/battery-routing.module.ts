import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatteryComponent } from './battery.component';

const routes: Routes = [{ path: '', component: BatteryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatteryRoutingModule { }
