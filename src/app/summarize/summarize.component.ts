import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal, effect, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { Title } from '@angular/platform-browser';

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
  private summarizer?: Summarizer;

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

  summarizeCreateOptions = computed(() => {
    return {
      format: this.selectedFormat(),
      type: this.selectedType(),
      length: this.selectedLength(),
    } as SummarizerCreateOptions;
  });

  constructor(private titleService: Title) {
    this.titleService.setTitle('Summarizer');

    effect(async () => {
      // Effect should be called whenever the summarizeOptions changes but skipping the initial execution.
      let newOptions = this.summarizeCreateOptions()
      if (this.summarizer) {
        this.summarizer = await Summarizer.create(newOptions);
        this.summarizeText(this.textbox?.nativeElement?.value || '');
      }
    });
  }

  async ngOnInit() {
    try {
      if ('Summarizer' in self) {
        /**
         * "unavailable" the browser does not support the requested options, or does not support prompting a language model at all.
         * "downloadable" the browser supports the requested options, but it will have to download something (for example, the language model itself, or a fine-tuning) before it can create a session using those options.
         * "downloading" the browser supports the requested options, but will need to finish an ongoing download operation before it can create a session using those options.
         * "available" the browser supports the requested options without requiring any new downloads.
         */
        const availabilityStatus = await Summarizer.availability();
        if (availabilityStatus === 'unavailable') {
          this.unsupportedText = "The Summarizer API isn't usable. This could be for a number of reasons, such as insufficient disk space or unsupported browser.";
          return;
        }
        if (availabilityStatus === 'available') {
          this.summarizer = await Summarizer.create(this.summarizeCreateOptions());
        } else {
          // The Summarizer API can be used after the model is downloaded
          if (!this.summarizer) {
            this.summarizer = await Summarizer.create({
              monitor(m: CreateMonitor) {
                m.addEventListener('downloadprogress', (e: ProgressEvent<EventTarget>) => {
                  console.log(`Downloaded ${e.loaded * 100}%`);
                });
              }
            });
            await (this.summarizer as any)?.ready;
          }
        }
      } else {
        this.unsupportedText = 'The Summarizer API is not supported in your browser.';
      }
    } catch (error) {
      this.unsupportedText = 'An error occurred while checking Summarizer API support in your browser.';
      console.error(error);
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
