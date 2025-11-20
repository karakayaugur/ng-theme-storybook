import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Output() clicked = new EventEmitter<MouseEvent>();
  @Input() isDisabled: boolean = false;
  @Input() isLoading: boolean = false;
  @Input() variant: 'default' | 'primary' | 'warning' | 'danger' | 'success' = 'default';
  @Input() size: 'small' | 'medium' | 'large' | 'x-large' = 'medium';

  get classes() {
    return [`${this.variant}`, `${this.size}`].join(' ');
  }
}
