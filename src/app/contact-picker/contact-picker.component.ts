import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-picker',
  templateUrl: './contact-picker.component.html',
  styleUrls: ['./contact-picker.component.scss']
})
export class ContactPickerComponent implements OnInit {

  statusText: string | undefined;

  constructor() { }

  ngOnInit(): void {
    if (!('contacts' in navigator && 'ContactsManager' in window)) {
      this.statusText = 'Your browser doesn\'t support Contact Picker API';
    }
  }

}
