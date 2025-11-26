import { Component, effect } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NAVIGATION_ITEMS } from './navigation.constants';
import { SharedPipes } from '@shared/shared-pipe';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
  imports: [RouterModule, ...SharedPipes],
  standalone: true,
})
export class NavigationComponent {
  public readonly navigationItems = NAVIGATION_ITEMS;
}
