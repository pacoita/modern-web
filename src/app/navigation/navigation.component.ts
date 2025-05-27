import { BreakpointService } from './../common/breakpoint.service';
import { Component, OnInit, ViewChild, inject, DestroyRef } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterLink,
    MatSidenavModule,
    MatListModule,
    RouterOutlet,
  ]
})
export class NavigationComponent implements OnInit {
  isHandset: boolean | undefined;
  navLinks = [
    { path: '/home', icon: 'assets/icons/home.png', alt: 'Home icon', label: 'Home' },
    { path: '/visibility', icon: 'assets/icons/visibility.png', alt: 'Visibility icon', label: 'Page Visibility' },
    { path: '/summary', icon: 'assets/icons/summarize.png', alt: 'Summary icon', label: 'Summarize' },
    { path: '/prompt', icon: 'assets/icons/prompt.png', alt: 'Prompt icon', label: 'Prompt' },
    { path: '/wakelock', icon: 'assets/icons/app_blocking.png', alt: 'Wake Lock icon', label: 'Wake Lock' },
    { path: '/light', icon: 'assets/icons/highlight.png', alt: 'Ambient Light icon', label: 'Ambient Light' },
    { path: '/orientation', icon: 'assets/icons/compass.png', alt: 'Orientation icon', label: 'Orientation' },
    { path: '/file', icon: 'assets/icons/folder.png', alt: 'File System Access icon', label: 'File System' },
    { path: '/camera', icon: 'assets/icons/camera_icon.png', alt: 'Camera icon', label: 'Media Capture' },
    { path: '/back-sync', icon: 'assets/icons/background-sync.png', alt: 'Background Sync icon', label: 'Background Sync' },
    { path: '/share', icon: 'assets/icons/share.png', alt: 'Share icon', label: 'Web Share' },
    { path: '/contacts', icon: 'assets/icons/contact.png', alt: 'Contacts icon', label: 'Contact Picker' },
    { path: '/offline', icon: 'assets/icons/signal_wifi.png', alt: 'Offline/Online icon', label: 'Offline/Online' },
    { path: '/vibrate', icon: 'assets/icons/vibration.png', alt: 'Vibration icon', label: 'Vibration' }
  ];

  @ViewChild('drawer')
  drawer!: MatSidenav;

  private breakpointService = inject(BreakpointService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.breakpointService.isHandset$.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(res => this.isHandset = res);
  }

  // Toggle the sidebar on mobile devices
  toggleOnNavigation(): void {
    if (this.isHandset) {
      this.drawer.toggle();
    }
  }
}
