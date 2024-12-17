import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClipboardService {
  constructor() {}

  private copyToClipboardFallback(text: string, notificationMsg: string): void {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      // this.notificationService.showNotification(
      //   'Success',
      //   notificationMsg,
      //   'success'
      // );
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
      // this.notificationService.showNotification(
      //   'Error',
      //   'Failed to copy to clipboard.',
      //   'error'
      // );
    }
    document.body.removeChild(textArea);
  }

  async copyToClipboard(text: string, detail?: string): Promise<void> {
    try {
      const notificationMsg = detail
        ? `${detail} copied to clipboard!`
        : 'Text copied to clipboard!';

      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        // this.notificationService.showNotification(
        //   'Success',
        //   notificationMsg,
        //   'success'
        // );
      } else {
        this.copyToClipboardFallback(text, notificationMsg);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // this.notificationService.showNotification(
      //   'Error',
      //   'Failed to copy to clipboard.',
      //   'error'
      // );
    }
  }
}
