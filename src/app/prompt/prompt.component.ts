/// <reference types="dom-chromium-ai"/>
import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
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
    FormsModule
  ],
  templateUrl: './prompt.component.html',
  styleUrl: './prompt.component.scss'
})
export class PromptComponent implements OnInit {
  @ViewChild('textbox') textbox!: ElementRef<HTMLTextAreaElement>;
  unsupportedText?: string;
  result?: string;
  errorMessage?: string;
  imagePreviewUrl: string | ArrayBuffer | null = null;
  imageFile?: File;
  temperature = signal<number>(0.7);
  topK = signal<number>(3);

  languageModelCreateOptions: LanguageModelCreateOptions = {
    // Default options for the language model session, if not provided.
    // {defaultTopK: 3, maxTopK: 8, defaultTemperature: 1, maxTemperature: 2}
    temperature: this.temperature(),
    topK: this.topK(),
    initialPrompts: [{
      role: 'system',
      content: 'You are an expert italian chef, proud of your country recipes, able to provide culinary advice and ingredient list from the provided images'
    }],
    expectedInputs: [
      { type: "audio" },
      { type: "image" }
    ]
  };

  session?: LanguageModel;

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
        if (!this.session) {
          this.session = await LanguageModel.create(this.languageModelCreateOptions);
        }
      } else {
        // The Prompt API can be used after the model is downloaded
        if (!this.session) {
          this.session = await LanguageModel.create({
            expectedInputs: [
              { type: "audio" },
              { type: "image" }
            ],
            monitor(m: CreateMonitor) {
              m.addEventListener('downloadprogress', (e: ProgressEvent<EventTarget>) => {
                console.log(`Downloaded ${e.loaded * 100}%`);
              });
            }
          });
        }
      }     
    } else {
      this.unsupportedText = 'The Prompt API is not supported in your browser.';
    }
  }

  async sendPrompt(prompt: string) {
    if (!this.session || (!prompt && !this.imageFile)) return;
    // We can clone an existing session for efficiency, instead of recreating one each time.
    // Note, though, that cloning a session resets the conversation context.
    // const clonedSession = await this.session.clone();

    const textPromtpt: LanguageModelMessage = {
      role: 'user',
      content: [{
        type: this.imageFile ? 'image' : 'text',
        value: prompt
      }]
    };

    const imagePrompt: LanguageModelMessage = {
      role: 'user',
      content: [
        { type: "text", value: "Provide a description of the upoloaded image and list the ingredients needed to make the dish:" },
        { type: "image", value: this.imageFile! }
      ]
    };

    this.result = ''; // Clear previous result
    this.textbox.nativeElement.value = ''; // Clear the input textbox after sending the prompt
    const stream = this.session.promptStreaming([ this.imageFile ? imagePrompt : textPromtpt ]);
    for await (const chunk of stream as any) {
      this.result += chunk;
    }

    // From https://github.com/webmachinelearning/prompt-api?tab=readme-ov-file#full-api-surface-in-web-idl
    // A given language model session will have a maximum number of tokens it can process. 
    // Developers can check their current usage and progress toward that limit by using the following properties on the session object:
    console.log(`${this.session.inputUsage} tokens used, out of ${this.session.inputQuota} tokens available.`);
  }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.imageFile = input?.files?.[0];
    if (this.imageFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreviewUrl = reader.result;
      };
      reader.readAsDataURL(this.imageFile);
    } else {
      this.removeImage();
    }
  }

  removeImage() {
    this.imageFile = undefined;
    this.imagePreviewUrl = null;
  }

  sendKeyPrompt(event: Event, prompt: string) {
    // Prevent default Enter key behavior
    event.preventDefault();
    this.sendPrompt(prompt);
  }
}
