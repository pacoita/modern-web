/// <reference types="dom-chromium-ai"/>
import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal, effect, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

// Declare Summarizer as a global, to avoid the TS compiler complaining about unknown objects in the global scope.
declare global {
  interface Window {
    Summarizer: any
  }
}

@Component({
  selector: 'app-summarize',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    FormsModule,
  ],
  templateUrl: './summarize.component.html',
  styleUrl: './summarize.component.scss'
})
export class SummarizeComponent implements OnInit {
  @ViewChild('textbox') textbox?: ElementRef<HTMLTextAreaElement>;
  unsupportedText?: string;
  summarizedText?: string;
  errorMessage?: string;
  isSummarizing = false;
  private summarizer?: AISummarizer;

  outputTypes = [
    { value: 'key-points', label: 'Key Points' },
    { value: 'tldr', label: 'TL;DR' },
    { value: 'teaser', label: 'Teaser' },
    { value: 'headline', label: 'Headline' },
  ];
  outputFormats = [
    { value: 'markdown', label: 'Markdown' },
    { value: 'plain-text', label: 'Plain Text' },
  ];
  outputLengths = [
    { value: 'short', label: 'Short' },
    { value: 'medium', label: 'Medium' },
    { value: 'long', label: 'Long' },
  ];
  // typesDescriptions = [
  //   { value: 'key-points', description: 'Summary should extract the most important points from the input, presented as a bulleted list.' },
  //   { value: 'tldr', description: 'Summary should be short and to the point, providing a quick overview of the input, suitable for a busy reader.' },
  //   { value: 'teaser', description: 'Summary should focus on the most interesting or intriguing parts of the input, designed to draw the reader in to read more.' },
  //   { value: 'headline', description: 'Summary should effectively contain the main point of the input in a single sentence, in the format of an article headline.' },
  // ];
  selectedFormat = signal('plain-text');
  selectedLength = signal('long');
  selectedType = signal('tldr');

  summarizeOptions = computed(() => {
    return {
      format: this.selectedFormat(),
      type: this.selectedType(),
      length: this.selectedLength(),
    };
  });

  constructor() {
    effect(async () => {      
      // Effect should be called whenever the summarizeOptions changes but skipping the initial execution.
      let newOptions = this.summarizeOptions()
      if(this.summarizer) {
        this.summarizer = await self.Summarizer.create(newOptions);
        this.summarizeText(this.textbox?.nativeElement?.value || '');
      }
    });
  }

  async ngOnInit() {
    if ('Summarizer' in self) {
      /**
       * - no: The current browser supports the Summarizer API, but it can't be used at the moment. This could be for a number of reasons, such as insufficient available disk space to download the model.
         - readily: The current browser supports the Summarizer API, and it can be used right away.
         - after-download: The current browser supports the Summarizer API, but it needs to download the model first.
       */
      const available = await self.Summarizer.availability();
      if (available === 'no') {
        this.unsupportedText = "The Summarizer API isn't usable. This could be for a number of reasons, such as insufficient available disk space to download the model.";
        return;
      }
      if (available === 'readily') {
        if (!this.summarizer) {
          this.summarizer = await self.Summarizer.create(this.summarizeOptions());
        }
      } else {
        // The Summarizer API can be used after the model is downloaded
        if (!this.summarizer) {
          this.summarizer = await self.Summarizer.create({
            monitor(m: AICreateMonitor) {
              m.addEventListener('downloadprogress', (e: DownloadProgressEvent) => {
                console.log(`Downloaded ${e.loaded} of ${e.total} bytes.`);
              });
            }
          });
          await (this.summarizer as any)?.ready;
        }
      }     
    } else {
      this.unsupportedText = 'The Summarizer API is not supported in your browser.';
    }
  }

  async summarizeText(targetText: string) {
    if (!this.summarizer || !targetText) return;

    try {
      this.errorMessage = undefined;
      this.summarizedText = undefined;
      this.isSummarizing = true;
      this.summarizedText = await this.summarizer.summarize(targetText);
      this.isSummarizing = false;
    } catch (error) {
      this.errorMessage = error instanceof Error ? error.message : 'An unknown error occurred while summarizing the text.';
      console.error(error);
      this.isSummarizing = false;
    }
  }

}
