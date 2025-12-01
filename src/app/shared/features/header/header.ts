import { Component } from '@angular/core';
import { NavigationComponent } from '@shared/features/navigation/navigation';
import { ThemeToggleComponent } from '@shared/shared-ui';
@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  imports: [ThemeToggleComponent],
})
export class HeaderComponent {}
