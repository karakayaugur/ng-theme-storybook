import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-input',
    imports: [CommonModule],
    templateUrl: './input.component.html',
    styleUrl: './input.component.css',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true,
        },
    ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: 'email' | 'text' | 'number' | 'password' = 'text';
  @Input() name: string = '';
  @Input() label?: string = undefined;
  @Input() placeholder?: string = undefined;
  @Input() autocomplete: string = 'off';
  @Input() required: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() control: any;
  @Input() uppercase: boolean = false;
  @Input() endIcon?: string = undefined;

  value: any;
  isPasswordVisible = false;
  // isDisabled: boolean = false;

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
    this.value = this.uppercase ? target.value.toUpperCase() : target.value;

    this.onChange(this.value);
    this.onTouched();
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
    // this.type = this.isPasswordVisible ? 'text' : 'password';
  }
}
