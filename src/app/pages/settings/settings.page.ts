import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedUi } from '@shared/shared-ui';

@Component({
  selector: 'app-settings',
  imports: [SharedUi, RouterOutlet],
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.css'],
})
export class SettingsPage {}
