import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `{{ name }}`,
  standalone: true,
})
export class IconComponent {
  @Input() name!: string;

  @Input() size: number = 24;

  @Input() fill: 0 | 1 = 0;
  @Input() weight: number = 200;
  @Input() grade: number = 0;
  @Input() opticalSize: number = 24;

  @HostBinding('style.font-variation-settings') get variation() {
    return `"FILL" ${this.fill}, "wght" ${this.weight}, "GRAD" ${this.grade}, "opsz" ${this.opticalSize}`;
  }

  @HostBinding('style.font-size.px') get fontSize() {
    return this.size;
  }

  @HostBinding('class.mat-icon') materialSymbolsClass = true;
}
