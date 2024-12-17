import {
  Component,
  EventEmitter,
  Output,
  forwardRef,
  ViewChildren,
  QueryList,
  ElementRef,
  Input,
  SimpleChanges,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-pin-input',
  templateUrl: './pin-input.component.html',
  styleUrls: ['./pin-input.component.css'],
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PinInputComponent),
      multi: true,
    },
  ],
})
export class PinInputComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() isReset: boolean = false;
  @Output() digitChange = new EventEmitter<string>();
  @ViewChildren('inputs') inputs: QueryList<ElementRef> = new QueryList();

  value: string = '';
  disabled: boolean = false;

  onChange = (value: string) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: any, index: number): void {
    const input = event.target;
    const value = input.value;

    if (value && /^\d$/.test(value)) {
      if (index < 5) {
        this.inputs.toArray()[index + 1].nativeElement.focus();
      }
      this.value = this.value + value;
      this.onChange(this.value);
      this.digitChange.emit(this.value);
    } else {
      input.value = '';
    }
  }

  onKeydown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Backspace') {
      const inputElements = this.inputs.toArray();
      const currentInput = inputElements[index].nativeElement;

      currentInput.value = '';
      this.value = this.value.slice(0, index) + this.value.slice(index + 1);
      this.onChange(this.value);
      this.digitChange.emit(this.value);

      if (index > 0 && currentInput.value === '') {
        const previousInput = inputElements[index - 1].nativeElement;
        previousInput.focus();
        previousInput.value = '';
        this.value = this.value.slice(0, index - 1) + this.value.slice(index);
        this.onChange(this.value);
        this.digitChange.emit(this.value);
      }

      event.preventDefault();
    }
  }

  onPaste(event: ClipboardEvent): void {
    const clipboardData = event.clipboardData || (window as any).clipboardData;
    const pastedText = clipboardData.getData('text');

    if (/^\d{6}$/.test(pastedText)) {
      this.value = pastedText;
      this.onChange(this.value);
      this.digitChange.emit(this.value);
      const inputElements = this.inputs.toArray();
      for (let i = 0; i < 6; i++) {
        inputElements[i].nativeElement.value = pastedText[i];
      }
      if (inputElements[5]) {
        inputElements[5].nativeElement.focus();
      }
      event.preventDefault();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isReset'] && changes['isReset'].currentValue === true) {
      this.inputs.forEach((el: ElementRef) => {
        el.nativeElement.value = '';
      });
      this.inputs.toArray()[0].nativeElement.focus();
    }
  }
}
