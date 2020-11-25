import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';


interface IAddress {
  addressLine: string;
  city: string;
  country: string;
  postalCode: string;
}

@Component({
  selector: 'app-contact-picker',
  templateUrl: './contact-picker.component.html',
  styleUrls: ['./contact-picker.component.scss'],
})
export class ContactPickerComponent implements OnInit {
  statusText: string | undefined;
  supported = true;

  contacts: any[] = [];

  constructor(private domSanitizer: DomSanitizer, private titleService: Title) {
    this.titleService.setTitle('Contact Picker');
  }

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

  getObjectUrl(blobImg: Blob[]): string | undefined {
    try {
      // We take only one icon
      return this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blobImg[0])) as string;
    } catch (err) {
      this.statusText = `${err.name} - ${err.message}`;
      return;
    }
  }

  formatAddresses(addresses: IAddress[]): string {
    // We take only the first available address
    const address = addresses[0];
    return `${address?.addressLine} ${address?.city} ${address?.postalCode} ${address?.country}`;
  }
}
