import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    imports: [MatCardModule]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
