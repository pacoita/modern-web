import { ShareObject } from './share-object';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-share',
    templateUrl: './share.component.html',
    styleUrls: ['./share.component.scss'],
    standalone: true,
    imports: [
        MatCardModule,
        NgIf,
        MatButtonModule,
        MatExpansionModule,
    ],
})
export class ShareComponent implements OnInit {
  unsupportedText: string | undefined;

  dataToShare: ShareObject[] = [
    {
      title: 'Cosmopolitan',
      text: `See more demos by Francesco Leardini

      ---- Cosmopolitan ----

      Ingredients:

      - 1 1/2 oz Citrus vodka \n
      - 1 oz Cointreau \n
      - 1/2 oz Fresh lime juice \n
      - 1 dash Cranberry juice \n

      Preparation:

      Add all ingredients into a shaker with ice and shake. \n
      Strain into a chilled cocktail glass. \n
      `,
      url: 'https://github.com/pacoita/modern-web',
    },
    {
      title: 'Manhattan',
      text: `See more demos by Francesco Leardini

      ---- Manhattan ----

      Ingredients:

      - 2oz Rye Whiskey \n
      - 1oz Sweet Vermouth \n
      - Dashes Angostura Bitters \n

      Preparation:

      Add ingredients to a mixing glass with cracked ice. \n
      Strain into a chilled cocktail glass. \n
      `,
      url: 'https://github.com/pacoita/modern-web',
    },
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle('Share');
  }

  ngOnInit(): void {
    if (!('share' in navigator)) {
      this.unsupportedText = 'Web Share API is not supported by your browser.';
    }
  }

  share(name: string): void {
    const target = this.dataToShare.find((t) => t.title === name);
    try {
      if (target) {
        navigator.share(target);
      } else {
        console.error('The provided cocktail is not shareable: ', name);
      }
    } catch (err: any) {
      console.error(err.name, err.message);
    }
  }
}
