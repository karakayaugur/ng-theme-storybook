import { Component } from '@angular/core';
import { NavigationComponent } from '@shared/features/navigation/navigation';
import { ThemeToggleComponent, IconComponent } from '@shared/shared-ui';
@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  imports: [ThemeToggleComponent, IconComponent],
})
export class HeaderComponent {}
