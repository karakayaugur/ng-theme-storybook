import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-select',
    imports: [],
    templateUrl: './select.component.html',
    styleUrl: './select.component.css'
})
export class SelectComponent {
  @Input() disabled = false;
  @Input() name: string = '';
  @Input() list: any[] = [];
  @Input() loading: true | false = false;

  onChange = () => {};
  onTouched = () => {};

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.name = value;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
