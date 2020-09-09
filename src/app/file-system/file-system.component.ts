import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-system',
  templateUrl: './file-system.component.html',
  styleUrls: ['./file-system.component.scss']
})
export class FileSystemComponent implements OnInit {

  unsupportedText: string | undefined;

  constructor() { }

  ngOnInit(): void {
    if ('chooseFileSystemEntries' in window) {

    } else {
      this.unsupportedText = 'Your browser does not support Native File System API or you did not activate the relative chrome flag.'
    }
  }

}
