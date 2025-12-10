import { Component, inject } from '@angular/core';
import { SharedPipes } from '@shared/shared-pipe';
import { ThemeToggleComponent } from '@shared/shared-ui';
import { SidebarService } from '@shared/services/sidebar/sidebar.service';
import { NavigationMenuComponent } from '@app/shared/features/navigation/navigation-menu';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.html',
  styleUrls: ['./side-bar.css'],
  imports: [...SharedPipes, ThemeToggleComponent, CommonModule, NavigationMenuComponent],
  standalone: true,
})
export class SideBarComponent {
  sidebarService = inject(SidebarService);
}
