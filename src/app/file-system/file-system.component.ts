import { ElementRef, AfterViewInit } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-file-system',
    templateUrl: './file-system.component.html',
    styleUrls: ['./file-system.component.scss'],
    imports: [
        MatCardModule,
        NgIf,
        MatButtonModule,
        MatExpansionModule,
    ]
})
export class FileSystemComponent implements OnInit, AfterViewInit {
  unsupportedText: string | undefined;
  errorText: string | undefined;

  fileHandle: FileSystemFileHandle | undefined;

  @ViewChild('textbox')
  textarea!: ElementRef;
  textAreaElement!: HTMLTextAreaElement;

  constructor(private titleService: Title) {
    this.titleService.setTitle('File System');
  }

  ngOnInit(): void {
    // Conditions valid until Chrome 85 and from v86 respectively
    if (
      !('chooseFileSystemEntries' in window) &&
      !('showOpenFilePicker' in window)
    ) {
      this.unsupportedText =
        'Your browser does not support File System Access API or you did not activate the Chrome flag.';
    }
  }

  ngAfterViewInit(): void {
    this.textAreaElement = this.textarea.nativeElement as HTMLTextAreaElement;
  }

  /**
   * It opens an existing file, creating a fileHandle for it.
   */
  async openFile(): Promise<any> {
    try {
      // By opening a file, the user grants READ permissions at once (Chrome 86+)
      // NB. We keep the fileHandle reference for later use (eg. save directly the file)
      this.fileHandle = await this.getFileHandle();

      // Returns a standard File object representing the selected file on disk
      const openedFile = await this.fileHandle.getFile();
      this.textAreaElement.value = await openedFile.text();
    } catch (error) {
       if (error instanceof DOMException) {
        switch (error.name) {
          case 'AbortError':
            this.errorText = 'File selection aborted by the user or system.';
            break;
          case 'NotAllowedError':
            this.errorText = 'Permission to read the file was denied.';
            break;
          case 'NotFoundError':
            this.errorText = 'The selected file was not found.';
            break;
          case 'SecurityError':
            this.errorText = 'File access was denied due to a security policy (e.g., not a user gesture).';
            break;
          default:
            this.errorText = `An unexpected file system error occurred: ${error.message} (Code: ${error.name})`;
        }
      } else if (error instanceof TypeError) {
        this.errorText = `A type error occurred during file open: ${error.message}`;
      } else {
        this.errorText = `An unexpected error occurred during file open: ${(error as Error).message || 'Unknown error'}`;
      }
      console.error(error);
    }
  }

  /**
   * The text passed as parameter is saved on the existing file, using an existing fileHandle.
   * If the fileHandle does not exist, a new file and the relative fileHandle will be created.
   * @param fileText The text content
   */
  async saveFile(fileText: string): Promise<void> {
    try {
      if (this.fileHandle) {
        await this.writeTextFile(this.fileHandle, fileText);
      } else {
        // It is a brand new file, save it to a new file
        return await this.saveAs(fileText);
      }
    } catch (error) {
      // If the user doesn't grant WRITE permission a DOMException is triggered
      this.errorText = (error as any).message;
      console.error(error);
    }
  }

  /**
   * It saves the text contento into a new file. A new fileHandle is generated.
   * @param fileText The text content
   */
  async saveAs(fileText: string): Promise<void> {
    try {
      // Save dialog grants WRITE permission
      this.fileHandle = await this.getNewFileHandle();
      await this.writeTextFile(this.fileHandle, fileText);
    } catch (error) {
      if (error instanceof DOMException) {
          switch (error.name) {
            case 'AbortError':
              this.errorText = 'File saving operation was aborted by the user or system.';
              break;
            case 'NotAllowedError':
              this.errorText = 'Permission to save the file was denied.';
              break;
            case 'NotFoundError': // Should not typically happen here unless fileHandle was invalidated
              this.errorText = 'The file to save to was not found or became invalid.';
              break;
            case 'NoModificationAllowedError':
              this.errorText = 'Modification of the file was not allowed (e.g., file locked or exclusive write conflict).';
              break;
            case 'SecurityError': // Less common here unless initial handle acquisition failed this way
              this.errorText = 'File saving was denied due to a security policy.';
              break;
            default:
              this.errorText = `An unexpected file system error occurred during save: ${error.message} (Code: ${error.name})`;
          }
        } else {
          this.errorText = `An unexpected error occurred during save: ${(error as Error).message || 'Unknown error'}`;
        } 
      console.error(error);
    }
  }

  private async writeTextFile(
    fileHandle: FileSystemFileHandle,
    textContent: string
  ): Promise<void> {
    // Creates a WRITABLE STREAM. Chrome first checks if the user has granted WRITE permission to the file
    const writeable = await fileHandle.createWritable();

    // Writes the textarea content to the stream.
    writeable.write(textContent);

    // No changes are written to the disk until we close the stream!
    writeable.close();
  }

  private async getFileHandle(): Promise<FileSystemFileHandle> {
    const options = this.getFilePickerOptions();

    // Chrome 86+
    return window.showOpenFilePicker(options)
      .then((handles: FileSystemFileHandle[]) => handles[0]);
  }

  private getNewFileHandle(): Promise<FileSystemFileHandle> {
    let options = {};

    // Chrome 86+
    options = this.getFilePickerOptions();
    return window.showSaveFilePicker(options);
  }

  private getFilePickerOptions(
    type: 'open-file' | 'save-file' = 'open-file'
  ): any {
    if ('showSaveFilePicker' in window) {
      return {
        types: [
          {
            description: 'Text files',
            accept: { 'text/plain': ['.txt'] },
          },
        ],
      };
    }

    return {
      type,
      accepts: [
        {
          description: 'Text files',
          mimeTypes: ['text/plain'],
          extensions: ['txt'],
        },
      ],
    };
  }
}
