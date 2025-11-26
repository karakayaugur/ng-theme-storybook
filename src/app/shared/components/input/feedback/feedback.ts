import { Component, computed, Input, Optional, Self } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-input-feedback',
  templateUrl: './feedback.html',
  styleUrls: ['./feedback.css'],
})
export class FeedbackComponent {
  @Input() control!: FormControl;
  @Input() variant: 'invalid' | 'valid' = 'invalid';

  visible(): boolean {
    return !!this.control && this.control.invalid && this.control.touched && this.control.dirty;
  }

  get feedback(): String | null {
    const errors = this.control?.errors;
    if (!errors) return null;
    if (errors['required']) return 'This field is required.';
    if (errors['email']) return 'Please enter a valid email address.';
    if (errors['minlength'])
      return `Minimum length is ${errors['minlength'].requiredLength} characters.`;
    if (errors['maxlength'])
      return `Maximum length is ${errors['maxlength'].requiredLength} characters.`;
    if (errors['pattern']) return 'Invalid format.';
    if (errors['invalidAmount'])
      return `This currency allows a maximum of ${errors['invalidAmount'].decimals} decimal places.`;
    if (errors['min']) {
      return `Minimum value is ${errors['min'].min}.`;
    }
    if (errors['cardNumber']) {
      return errors['cardNumber'];
    }
    return 'Undefined input error :(';
  }
}
