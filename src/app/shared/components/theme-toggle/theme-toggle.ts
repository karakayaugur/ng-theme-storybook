import { Component } from '@angular/core';
import { ThemeService } from './theme.services';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.css',
})
export class ThemeToggleComponent {
  constructor(private themeService: ThemeService) {}
  handleClick() {
    this.themeService.toggleTheme();
  }
}
