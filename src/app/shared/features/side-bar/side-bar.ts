import { Component, effect } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MENU_ITEMS } from './side-bar.constants';
import { SharedPipes } from '@shared/shared-pipe';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.html',
  styleUrls: ['./side-bar.css'],
  imports: [...SharedPipes, RouterLinkActive, RouterLink],
  standalone: true,
})
export class SideBarComponent {
  public readonly menuItems = MENU_ITEMS;
}
