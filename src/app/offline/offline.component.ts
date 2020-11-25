import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.scss']
})
export class OfflineComponent {
  clientOnline = true;

  @HostListener('window:offline', ['$event'])
  private onOffline(event: Event): void {
    this.clientOnline = false;
  }

  @HostListener('window:online', ['$event'])
  private onOnline(event: Event): void {
    this.clientOnline = true;
  }

  constructor(private titleService: Title) {
    this.titleService.setTitle('Online Events');
  }
}
