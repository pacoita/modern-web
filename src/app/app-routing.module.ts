import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'wakelock', loadChildren: () => import('./wake-lock/wake-lock.module').then(m => m.WakeLockModule) },
  { path: 'visibility', loadChildren: () => import('./visibility/visibility.module').then(m => m.VisibilityModule) },
  { path: 'share', loadChildren: () => import('./share/share.module').then(m => m.ShareModule) },
  { path: 'vibrate', loadChildren: () => import('./vibration/vibration.module').then(m => m.VibrationModule) },
  { path: 'home', component: HomeComponent },
  { path: 'light', loadChildren: () => import('./light/light.module').then(m => m.LightModule) },
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
