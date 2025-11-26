import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line
  selector: '[href]',
  standalone: true,
})
export class NohrefDirective {
  @Input() href: string | undefined;

  @HostListener('click', ['$event'])
  noop(event: MouseEvent) {
    if (!this.href || this.href === '#') {
      event.preventDefault();
    }
  }
}
