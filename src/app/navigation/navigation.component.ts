import { BreakpointService } from './../common/breakpoint.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  isHandset: boolean | undefined;

  @ViewChild('drawer')
  drawer!: MatSidenav;

  private destroy$ = new Subject<boolean>();

  constructor(private breakpointService: BreakpointService) {}

  ngOnInit(): void {
    this.breakpointService.isHandset$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(res => this.isHandset = res);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  // Toggle the sidebar on mobile devices
  toggleOnNavigation(): void {
    if (this.isHandset) {
      this.drawer.toggle();
    }
  }
}
