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
      this.statusText = 'Your browser does not support the Contact Picker API';
    }
  }

  async selectContacts(): Promise<void> {
    // The 'getProperties' method returns the available contact properties. Uncomment it to see them.
    // const fields = await (navigator as any).contacts.getProperties();

    // Available fields: 'name', 'email', 'tel', 'address', 'icon'
    const fields = ['name', 'address', 'icon'];
    // Allowing to select multiple contacts at once.
    const options = { multiple: true };
    try {
      // Contacts is a read-only property of the Navigator interface providing a ContactsManager object.
      // The select() method opens the "contact picker" dialog.
      this.contacts = await (navigator as any).contacts.select(fields, options);
    } catch (err) {
      this.statusText = `An error occurred.`;
      console.error(err);
    }
  }

  getObjectUrl(blobImg: Blob[]): string | undefined {
    try {
      // We take only one icon here
      return this.domSanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(blobImg[0])
      ) as string;
    } catch (err) {
      this.statusText = `An error occurred.`;
      console.error(err);
      return;
    }
  }

  formatAddresses(addresses: IAddress[]): string {
    // We take only the first available address
    const address = addresses[0];
    return `${address?.addressLine} ${address?.city} ${address?.postalCode} ${address?.country}`;
  }
}
