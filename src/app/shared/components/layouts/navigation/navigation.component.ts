import { Component } from '@angular/core';
import { ThemeService } from '@shared/services';
import { SwitchComponent } from '@shared/components';

@Component({
    selector: 'app-navigation',
    imports: [SwitchComponent],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  constructor(private themeService: ThemeService) {}
  toggleTheme(e: any): void {
    this.themeService.toggleTheme();
  }
}
