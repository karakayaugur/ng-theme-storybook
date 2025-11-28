import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Variant, Size } from './type';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrls: ['./button.css'],
})
export class ButtonComponent {
  @Output() onClick = new EventEmitter<any>();
  @Input() variant: Variant = 'default';
  @Input() isDisabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() size: Size = 'medium';
  @Input() class?: string | string[];
  @Input() style?: { [key: string]: string };
  @Input() label?: string;
  @Input() fullWidth?: boolean = false;

  handleClick(event: any) {
    this.onClick.emit(event);
  }

  getClass(): string[] {
    const baseClasses = [
      'button',
      this.variant,
      this.size,
      this.loading ? 'loading' : '',
      this.fullWidth ? 'w-full' : '',
    ];
    if (!this.class) return baseClasses;
    return Array.isArray(this.class)
      ? [...baseClasses, ...this.class]
      : [...baseClasses, this.class];
  }
}
