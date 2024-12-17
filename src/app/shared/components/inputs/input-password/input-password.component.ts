import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-password',
  imports: [CommonModule],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPasswordComponent),
      multi: true,
    },
  ],
})
export class InputPasswordComponent implements ControlValueAccessor {
  @Input() type: 'password' | 'text' = 'password';
  @Input() name: string = 'password';
  @Input() label?: string = 'Your password';
  @Input() placeholder?: string = 'Please enter your password.';
  @Input() autocomplete: string = 'off';
  @Input() required: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() control: any;

  value: any;
  isPasswordVisible = false;

  private onChange = (value: any) => {};

  private onTouched = () => {};

  public writeValue(value: any): void {
    this.value = value;
  }

  public registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
    this.onTouched();
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
