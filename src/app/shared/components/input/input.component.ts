import { Component, Input, Optional, Self } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback/feedback';

@Component({
  standalone: true,
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  imports: [CommonModule, FeedbackComponent],
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() label?: string;
  @Input() icon?: string;
  @Input() tooltip?: string;
  @Input() placeholder?: string;
  @Input() required: boolean = false;
  @Input() autocomplete: 'on' | 'off' = 'off';
  @Input() labelVariant?: string = '';
  @Input() id: string = `input-${Math.random().toString(36).substring(2, 9)}`;
  @Input() disabled: boolean = false;

  value: any;

  private onChange = (value: any) => {};
  public onTouched = () => {};

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  updateValue(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
    this.onTouched();
  }

  onBlur(): void {}

  onFocus(): void {
    this.control?.markAsUntouched();
    this.control?.updateValueAndValidity();
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  get control(): FormControl | null {
    return this.ngControl?.control as FormControl;
  }
}
