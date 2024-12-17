import {
  Component,
  Input,
  Renderer2,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'app-container',
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  private mainElement: HTMLElement | null;
  @Input() fullHeight: boolean = false;

  constructor(private renderer: Renderer2) {
    this.mainElement = document.querySelector('main');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['fullHeight'] && changes['fullHeight'].currentValue) {
      this.makeFullHeight();
    } else if (changes['fullHeight'] && !changes['fullHeight'].currentValue) {
      this.revertFullHeight();
    }
  }

  private makeFullHeight() {
    this.renderer.addClass(this.mainElement, 'full-height');
  }

  private revertFullHeight() {
    this.renderer.removeClass(this.mainElement, 'full-height');
  }
}
