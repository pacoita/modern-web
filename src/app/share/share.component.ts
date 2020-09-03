import { ShareService } from './share.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent {

  constructor(private shareService: ShareService) { }

  shareDemo(): void {
    this.shareService.shareItem({
      title: 'Share APIs Demo',
      text: 'Learn modern web APIs with cool demos!',
      url: 'tbd'
    });
  }

}
