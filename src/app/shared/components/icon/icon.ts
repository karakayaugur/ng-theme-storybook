import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  styleUrls: ['./icon.css'],
  template: `
    <span
      class="Material Symbols Outlined"
      [class.material-outlined]="type === 'outlined'"
      [style.fontSize.px]="size"
      [style.fontVariationSettings]="variationSettings"
    >
      {{ name }}
    </span>
  `,
})
export class IconComponent {
  @Input() name = '';
  @Input() size = 24;
  @Input() type: 'outlined' | 'rounded' | 'sharp' = 'outlined';

  // Opsiyonel: fill/wght opsiyonları
  @Input() fill = 0;
  @Input() wght = 400;
  @Input() grad = 0;
  @Input() opsz = 24;

  get variationSettings() {
    return `'FILL' ${this.fill}, 'wght' ${this.wght}, 'GRAD' ${this.grad}, 'opsz' ${this.opsz}`;
  }
}
