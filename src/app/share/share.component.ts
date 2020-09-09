import { ShareObject } from './share-object';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {
  unsupportedText: string | undefined;

  dataToShare: ShareObject[] = [
    {
      title: 'Cosmopolitan',
      text: `-- See more demos by Francesco Leardini -- \n\n
      \n\n -- Cosmopolitan -- \n\n
      \n\n Ingredients: \n\n
      - 1 1/2 oz Citrus vodka \n\n
      - 1 oz Cointreau \n\n
      - 1/2 oz Fresh lime juice \n\n
      - 1 dash Cranberry juice \n\n
      Preparation: \n\n
      Add all ingredients into a shaker with ice and shake.\n\n
      Strain into a chilled cocktail glass.\n\n
      `,
      url: 'https://github.com/pacoita/modern-web',
    },
    {
      title: 'Manhattan',
      text: `-- See more demos by Francesco Leardini -- \n\n
      \n\n -- Manhattan -- \n\n
      \n\n Ingredients: \n\n
      - 2oz Rye Whiskey \n\n
      - 1oz Sweet Vermouth \n\n
      - Dashes Angostura Bitters \n\n
      Preparation: \n\n
      Add ingredients to a mixing glass
      with cracked ice.\n\n
      Strain into a chilled cocktail glass.\n\n
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
    } catch (err) {
      console.error(err.name, err.message);
    }
  }
}
