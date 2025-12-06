import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedUi } from '@shared/shared-ui';
import { HeaderComponent } from '@shared/features/header/header';
import { SideBarComponent } from '@shared/features/side-bar/side-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ...SharedUi, HeaderComponent, SideBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ng-storybook');
}
