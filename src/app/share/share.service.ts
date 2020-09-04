import { Injectable } from '@angular/core';

export interface ShareObject {
  title: string;
  text: string;
  url?: string;
  files?: File[];
}

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private data = {};

  async shareItem(item: ShareObject): Promise<void> {
    try {
      if ((navigator as any).canShare(this.data)) {
        await navigator.share(this.data);
      }
    } catch (err) {
      alert('Share is not supported by your browser.');
      console.error(err.name, err.message);
    }
  }
}
