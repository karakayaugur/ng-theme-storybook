import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  standalone: true,
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
})
export class SwitchComponent {
  @Input() checked: boolean = false;
  @Output() toggled = new EventEmitter<boolean>();

  toggleSwitch(): void {
    this.checked = !this.checked;
    this.toggled.emit(this.checked);
  }
}
