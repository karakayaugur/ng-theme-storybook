import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '@shared/features/side-bar/side-bar';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.css'],
  imports: [RouterOutlet, SideBarComponent],
})
export class MainLayoutComponent {}
