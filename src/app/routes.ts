import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'wakelock', loadComponent: () => import('./wake-lock/wake-lock.component').then(c => c.WakeLockComponent) },
  { path: 'visibility', loadComponent: () => import('./visibility/visibility.component').then(c => c.VisibilityComponent) },
  { path: 'share', loadComponent: () => import('./share/share.component').then(c => c.ShareComponent) },
  { path: 'vibrate', loadComponent: () => import('./vibration/vibration.component').then(c => c.VibrationComponent) },
  { path: 'light', loadComponent: () => import('./light/light.component').then(c => c.LightComponent) },
  { path: 'orientation', loadComponent: () => import('./orientation/orientation.component').then(c => c.OrientationComponent) },
  { path: 'file', loadComponent: () => import('./file-system/file-system.component').then(c => c.FileSystemComponent) },
  { path: 'contacts', loadComponent: () => import('./contact-picker/contact-picker.component').then(c => c.ContactPickerComponent) },
  { path: 'offline', loadComponent: () => import('./offline/offline.component').then(c => c.OfflineComponent) },
  { path: 'about', loadComponent: () => import('./about/about.component').then(c => c.AboutComponent) },
  { path: 'camera', loadComponent: () => import('./camera/camera.component').then(c => c.CameraCaptureComponent) },
  { path: 'back-sync', loadComponent: () => import('./background-sync/background-sync.component').then(c => c.BackgroundSyncComponent) },
  { path: 'summary', loadComponent: () => import('./summarize/summarize.component').then(c => c.SummarizeComponent) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home'}
];

