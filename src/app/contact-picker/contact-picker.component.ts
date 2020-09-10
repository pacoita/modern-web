import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-picker',
  templateUrl: './contact-picker.component.html',
  styleUrls: ['./contact-picker.component.scss'],
})
export class ContactPickerComponent implements OnInit {
  statusText: string | undefined;
  supported = true;

  contacts: any[] = [];

  constructor() {}

  ngOnInit(): void {
    if (!('contacts' in navigator && 'ContactsManager' in window)) {
      this.supported = false;
      this.statusText = 'Your browser does not support Contact Picker API';
    }
  }

  async selectContacts(): Promise<void> {
    // Available fields: 'name', 'email', 'tel', 'address', 'icon'
    // Nb. address and icon fields available only in Chrome 84+

    // Dynamically returns the available contact properties
    const fields = await (navigator as any).contacts.getProperties();
    const options = { multiple: true };
    try {
      this.contacts = await (navigator as any).contacts.select(fields, options);
    } catch (err) {
      this.statusText = `${err.name} - ${err.message}`;
    }
  }

  getObjectUrl(blob: Blob): string | undefined {
    try {
      return URL.createObjectURL(blob);
    } catch (err) {
      this.statusText = `${err.name} - ${err.message}`;
      return;
    }
  }
}
