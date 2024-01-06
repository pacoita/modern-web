import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'wakelock', loadChildren: () => import('./wake-lock/wake-lock.module').then(m => m.WakeLockModule) },
  { path: 'visibility', loadChildren: () => import('./visibility/visibility.module').then(m => m.VisibilityModule) },
  { path: 'share', loadChildren: () => import('./share/share.module').then(m => m.ShareModule) },
  { path: 'vibrate', loadChildren: () => import('./vibration/vibration.module').then(m => m.VibrationModule) },
  { path: 'light', loadChildren: () => import('./light/light.module').then(m => m.LightModule) },
  { path: 'orientation', loadChildren: () => import('./orientation/orientation.module').then(m => m.OrientationModule) },
  { path: 'file', loadChildren: () => import('./file-system/file-system.module').then(m => m.FileSystemModule) },
  { path: 'contacts', loadChildren: () => import('./contact-picker/contact-picker.module').then(m => m.ContactPickerModule) },
  { path: 'offline', loadChildren: () => import('./offline/offline.module').then(m => m.OfflineModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
