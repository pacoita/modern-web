import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as jsonData from './solutions.json';
import { Title } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { NgIf, NgClass } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-vibration',
    templateUrl: './vibration.component.html',
    styleUrls: ['./vibration.component.scss'],
    imports: [MatCardModule, NgIf, MatStepperModule, FormsModule, ReactiveFormsModule, MatRadioModule, MatButtonModule, NgClass, MatExpansionModule]
})
export class VibrationComponent implements OnInit {
  // Each value is in ms
  // "Vibrate - Pause" values pattern
  correctAnswerPattern = [100, 30, 100, 30, 100];
  wrongAnswerPattern = [700];

  firstFormGroup: UntypedFormGroup | undefined;
  secondFormGroup: UntypedFormGroup | undefined;

  finalScore = 0;

  solutions: string[] = (jsonData as any).default.answers;
  answers: boolean[] = [];

  constructor(private fb: UntypedFormBuilder, private titleService: Title ) {
    this.titleService.setTitle('Vibration');
  }

  ngOnInit(): void {
    // NB. We don't check if the Vibration API is supported -> ('vibrate' in navigator)
    // as we want to show the quiz anyway -> Progressive enhancement!

    this.firstFormGroup = this.fb.group({
      question: ['', Validators.required],
    });
    this.secondFormGroup = this.fb.group({
      question: ['', Validators.required],
    });
  }

  verify(targetForm: UntypedFormGroup, questionIndex: number): void {
    const isCorrectAnswer =
      targetForm.get('question')?.value === this.solutions[questionIndex];
    let vibrationPattern = this.wrongAnswerPattern;
    if (isCorrectAnswer) {
      this.finalScore = ++this.finalScore;
      vibrationPattern = this.correctAnswerPattern;
    }
    window.navigator.vibrate(vibrationPattern);
    this.answers[questionIndex] = isCorrectAnswer;
    targetForm.disable();
  }
}
