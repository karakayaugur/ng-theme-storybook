import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedUi } from '@shared/shared-ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ...SharedUi],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ng-storybook');
}
