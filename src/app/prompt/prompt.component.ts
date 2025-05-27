/// <reference types="dom-chromium-ai"/>
import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

// Declare LanguageModel as a global, to avoid the TS compiler complaining about unknown objects in the global scope.
declare global {
  interface Window {
    LanguageModel: any
  }
}

@Component({
  selector: 'app-prompt',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    FormsModule,
  ],
  templateUrl: './prompt.component.html',
  styleUrl: './prompt.component.scss'
})
export class PromptComponent implements OnInit {
  @ViewChild('textbox') textbox?: ElementRef<HTMLTextAreaElement>;
  unsupportedText?: string;
  errorMessage?: string;

  selectedFormat = signal('plain-text');
  selectedLength = signal('long');
  selectedType = signal('tldr');

  async ngOnInit() {
    if ('LanguageModel' in self) {
      // TODO: ... 
    } else {
      this.unsupportedText = 'The Prompt API is not supported in your browser.';
    }
  }
}
