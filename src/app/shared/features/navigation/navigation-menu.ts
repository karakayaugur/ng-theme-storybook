import { Component, effect } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedPipes } from '@shared/shared-pipe';
import { IconComponent } from '@shared/shared-ui';
@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.html',
  styleUrls: ['./navigation-menu.css'],
  imports: [RouterModule, ...SharedPipes, IconComponent],
  standalone: true,
})
export class NavigationMenuComponent {
  public readonly navigationItems = NAVIGATION_ITEMS;
}

type NavigationItem = { label: string; url: string; icon?: string };

const NAVIGATION_ITEMS: NavigationItem[] = [
  { url: '/orders', label: 'Orders', icon: 'shopping_cart' },
  { url: '/products', label: 'Products', icon: 'inventory' },
  { url: '/customers', label: 'Customers', icon: 'people' },
  { url: '/settings', label: 'Settings', icon: 'settings' },
];
