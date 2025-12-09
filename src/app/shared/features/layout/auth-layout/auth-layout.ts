import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '@shared/features/side-bar/side-bar';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.html',
  styleUrls: ['./auth-layout.css'],
  imports: [RouterOutlet, SideBarComponent],
})
export class AuthLayoutComponent {}
