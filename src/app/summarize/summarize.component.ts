/// <reference types="dom-chromium-ai"/>
import { Component, computed, OnInit, signal, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-summarize',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    FormsModule,
  ],
  templateUrl: './summarize.component.html',
  styleUrl: './summarize.component.scss'
})
export class SummarizeComponent implements OnInit {
  unsupportedText?: string;
  summarizedText?: string;
  isSummarizing = false;
  private summarizer?: AISummarizer;

  outputTypes = [
    { value: 'key-points', label: 'Key Points' },
    { value: 'tl;dr', label: 'TL;DR' },    
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
  selectedFormat = signal('plain-text');
  selectedLength = signal('long'); 
  selectedType = signal('tl;dr');

  summarizeOptions = computed(() => {
    return {
      type: this.selectedType(),
      format: this.selectedFormat(),
      length: this.selectedLength(),
    };
  });

  async ngOnInit() {
    if ('Summarizer' in self) {
      // TODO: : Once set, the parameters can't be changed. Create a new summarizer object if you need to make modifications to the parameters.
      // const options: AISummarizerCreateOptions = {
      //   // sharedContext: 'This is a {targetContext} article', // Optional context
      //   type: 'tl;dr', // Type of summarization: 'key-points', 'tl;dr', 'teaser', or 'headline'
      //   format: 'plain-text', // Format: 'markdown' or 'plain-text'
      //   length: 'long' 
      // };      

      /**
       * AISummarizerCapabilities object with an available field that can take three possible values
       * 
       * - no: The current browser supports the Summarizer API, but it can't be used at the moment. This could be for a number of reasons, such as insufficient available disk space to download the model.
         - readily: The current browser supports the Summarizer API, and it can be used right away.
         - after-download: The current browser supports the Summarizer API, but it needs to download the model first.
       */
      const available = (await ((self as any).Summarizer).availability());
      if (available === 'no') {
        this.unsupportedText = "The Summarizer API isn't usable. This could be for a number of reasons, such as insufficient available disk space to download the model.";
        return;
      }
      if (available === 'readily') {
        this.summarizer = await ((self as any).Summarizer).create(this.summarizeOptions());
      } else {
        // The Summarizer API can be used after the model is downloaded.
        // TODO: Add a prompt before downloading the model.
        this.summarizer = await ((self as any).Summarizer).create({
          monitor(m: AICreateMonitor) {
            m.addEventListener('downloadprogress', (e: DownloadProgressEvent) => {
              console.log(`Downloaded ${e.loaded} of ${e.total} bytes.`);
            });
          }
        });
        await (this.summarizer as any)?.ready;
      }


    effect(async () => {
      this.summarizer = await ((self as any).Summarizer).create(this.summarizeOptions());
    });
    } else {
      this.unsupportedText = 'The Summarizer API is not supported in your browser.';
    }
  }

  async summarizeText(targetText: string) {
    if (!this.summarizer || !targetText) return;

    this.isSummarizing = true;
    this.summarizedText = await this.summarizer.summarize(targetText);
    this.isSummarizing = false;
  }

}
