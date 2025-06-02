/// <reference types="dom-chromium-ai"/>
import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-prompt',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule
  ],
  templateUrl: './prompt.component.html',
  styleUrl: './prompt.component.scss'
})
export class PromptComponent implements OnInit {
  @ViewChild('textbox') textbox?: ElementRef<HTMLTextAreaElement>;
  unsupportedText?: string;
  result?: string;
  errorMessage?: string;
  imageFileName?: string;

  temperature = signal<number>(0.7);
  topK = signal<number>(3);

  languegeModelCreateOptions: LanguageModelCreateOptions ={
    temperature: this.temperature(),
    topK: this.topK(),
    initialPrompts: [{
      role: 'system',
      content: 'You are an expert chef, able to provide culinary advice and imngredient list from the provided images.'
    }]
  };

  model?: LanguageModel;

  async ngOnInit() {
    if ('LanguageModel' in self) {
      /**
       * "unavailable" means that the browser does not support the requested options, or does not support prompting a language model at all.
       * "downloadable" means that the browser supports the requested options, but it will have to download something (for example, the language model itself, or a fine-tuning) before it can create a session using those options.
       * "downloading" means that the browser supports the requested options, but will need to finish an ongoing download operation before it can create a session using those options.
       * "available" means that the browser supports the requested options without requiring any new downloads.
       */
      const availabilityStatus = await LanguageModel.availability();
      if (availabilityStatus === 'unavailable') {
        this.unsupportedText = "The Prompt API isn't usable. This could be for a number of reasons, such as insufficient available disk space to download the model.";
        return;
      }
      else if (availabilityStatus === 'available') {
        if (!this.model) {
          this.model = await LanguageModel.create(this.languegeModelCreateOptions);
        }
      } else {
        // The Prompt API can be used after the model is downloaded
        if (!this.model) {
          this.model = await LanguageModel.create({
            monitor(m: CreateMonitor) {
              m.addEventListener('downloadprogress', (e: ProgressEvent<EventTarget>) => {
                console.log(`Downloaded ${e.loaded} of ${e.total} bytes.`);
              });
            }
          });
          await (this.model as any)?.ready;
        }
      }     
    } else {
      this.unsupportedText = 'The Prompt API is not supported in your browser.';
    }
  }

  async sendPrompt(prompt: string) {
    if (!this.model || !prompt) return;
    this.result = await this.model.prompt([{
      role: 'user',
      content: [{
        type: 'text', // 'image'
        value: prompt  //ImageBitmapSource
      }]
    }])
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.imageFileName = file.name;
    }
  }

}
