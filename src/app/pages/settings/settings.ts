import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedUi } from '@shared/shared-ui';

@Component({
  selector: 'app-settings',
  imports: [SharedUi, RouterOutlet],
  templateUrl: './settings.html',
  styleUrls: ['./settings.css'],
})
export class Settings {}
