import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'wakelock', loadComponent: () => import('./wake-lock/wake-lock.component').then(m => m.WakeLockComponent) },
  { path: 'visibility', loadComponent: () => import('./visibility/visibility.component').then(m => m.VisibilityComponent) },
  { path: 'share', loadComponent: () => import('./share/share.component').then(m => m.ShareComponent) },
  { path: 'vibrate', loadComponent: () => import('./vibration/vibration.component').then(m => m.VibrationComponent) },
  { path: 'light', loadComponent: () => import('./light/light.component').then(m => m.LightComponent) },
  { path: 'orientation', loadComponent: () => import('./orientation/orientation.component').then(m => m.OrientationComponent) },
  { path: 'file', loadComponent: () => import('./file-system/file-system.component').then(m => m.FileSystemComponent) },
  { path: 'contacts', loadComponent: () => import('./contact-picker/contact-picker.component').then(m => m.ContactPickerComponent) },
  { path: 'offline', loadComponent: () => import('./offline/offline.component').then(m => m.OfflineComponent) },
  { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
