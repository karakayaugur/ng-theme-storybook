import { Component } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.html',
  styleUrls: ['./outlet.css'],
  imports: [RouterOutlet],
})
export class OutletComponent {}
