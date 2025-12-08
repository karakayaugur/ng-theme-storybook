import { Component, effect } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MENU_ITEMS } from './side-bar.constants';
import { SharedPipes } from '@shared/shared-pipe';
import { IconComponent, ThemeToggleComponent } from '@shared/shared-ui';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.html',
  styleUrls: ['./side-bar.css'],
  imports: [...SharedPipes, RouterLinkActive, RouterLink, IconComponent, ThemeToggleComponent],
  standalone: true,
})
export class SideBarComponent {
  public readonly menuItems = MENU_ITEMS;
}
