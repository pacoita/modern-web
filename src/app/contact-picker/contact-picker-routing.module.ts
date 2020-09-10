import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactPickerComponent } from './contact-picker.component';

const routes: Routes = [{ path: '', component: ContactPickerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactPickerRoutingModule { }
