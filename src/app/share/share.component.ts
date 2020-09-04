import { ShareService, ShareObject } from './share.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent {

  dataToShare: ShareObject[] = [
    {
      title: 'Cosmopolitan',
      text: `-- See more demos by Francesco Leardini -- \n\n
      \n\n Ingredients: \n\n
      - 1 1/2 oz Citrus vodka \n\n
      - 1 oz Cointreau \n\n
      - 1/2 oz Fresh lime juice \n\n
      - 1 dash Cranberry juice \n\n
      Preparation: \n\n
      Add all ingredients into a shaker with ice and shake.\n\n
      Strain into a chilled cocktail glass.\n\n
      `,
      url: 'GITHUB Address -- tbd',
    },
    {
      title: 'Share APIs images',
      text: 'Web share level 2 allows to attach also files: ',
     files: []
    },
    {
      title: 'Manhattan',
      text: `-- See more demos by Francesco Leardini -- \n\n
      \n\n Ingredients: \n\n
      - 2oz Rye Whiskey \n\n
      - 1oz Sweet Vermouth \n\n
      - Dashes Angostura Bitters \n\n
      Preparation: \n\n
      Add ingredients to a mixing glass
      with cracked ice.\n\n
      Strain into a chilled cocktail glass.\n\n
      `,
      url: 'GITHUB Address -- tbd',
    },
    {
      title: 'Share APIs images',
      text: 'Web share level 2 allows to attach also files: ',
     files: []
    },
  ];

  constructor(private shareService: ShareService) {
  }

  share(name: string): void {
    const target = this.dataToShare.find(t => t.title === name);
    if (target) {
      this.shareService.shareItem(target);
    } else {
      console.error('The provided cocktail is not shareable: ', name);
    }
  }
}
