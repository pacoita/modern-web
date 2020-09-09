/// <reference types="wicg-native-file-system" />
import { ElementRef, AfterViewInit } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-file-system',
  templateUrl: './file-system.component.html',
  styleUrls: ['./file-system.component.scss'],
})
export class FileSystemComponent implements OnInit, AfterViewInit {
  unsupportedText: string | undefined;
  errorText: string | undefined;
  fileHandle: FileSystemFileHandle | undefined;

  @ViewChild('textbox')
  textarea!: ElementRef;
  textAreaElement!: HTMLTextAreaElement;

  // TODO: Autosave checkbox (?)

  constructor() {}

  ngOnInit(): void {
    if (!('chooseFileSystemEntries' in window)) {
      this.unsupportedText =
        'Your browser does not support Native File System API or you did not activate the relative flag if you use Chrome.';
    }
  }

  ngAfterViewInit(): void {
    this.textAreaElement = this.textarea.nativeElement as HTMLTextAreaElement;
  }

  async openFile(): Promise<any> {
    try {
      // By opening a file, the user grants READ permission
      this.fileHandle = await window.chooseFileSystemEntries({
        // 'open-file' (default) gives us an open file dialog
        type: 'open-file',
        accepts: [
          {
            description: 'Text files',
            mimeTypes: ['text/plain'],
            extensions: ['txt'],
          },
        ],
      });

      // Returns a File object representing the selected file on disk
      const openedFile = await this.fileHandle.getFile();
      this.textAreaElement.value = await openedFile.text();
    } catch (error) {
      this.errorText = error.message;
      console.error(error.name, error.message);
    }
  }

  async saveAs(fileText: string): Promise<void> {
    try {
      // Save dialog grants WRITE permission over the file
      this.fileHandle = await window.chooseFileSystemEntries({
        // 'save-file' gives us a file save dialog. Again we accept only txt files here.
        type: 'save-file',
        accepts: [
          {
            description: 'Text files',
            mimeTypes: ['text/plain'],
            extensions: ['txt'],
          },
        ],
      });
      await this.writeTextFile(this.fileHandle, fileText);
    } catch (error) {
      this.errorText = error.message;
      console.error(error.name, error.message);
    }
  }

  async saveFile(fileText: string): Promise<void> {
    try {
      if (this.fileHandle) {
        await this.writeTextFile(this.fileHandle, fileText);
      } else {
        // It is a brand new file, save it to a new file
        return await this.saveAs(fileText);
      }
    } catch (error) {
      this.errorText = error.message;
      console.error(error.name, error.message);
    }
  }

  private async writeTextFile(fileHandle: FileSystemFileHandle, fileText: string): Promise<void> {
    // Creates a writeable stream.
    // Chrome first checks if the user has granted write permission to the file
    const writeable = fileHandle.createWritable();

    // Write the textarea content to the stream.
    (await writeable).write(fileText);

    // No changes are written to the disk until we close the stream!
    (await writeable).close();
  }
}
