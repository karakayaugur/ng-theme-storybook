import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarService } from '@shared/services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrls: ['./main.css'],
  imports: [RouterOutlet, CommonModule],
})
export class MainComponent implements OnInit {
  sidebarService = inject(SidebarService);
  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.sidebarService.updateWidth(window.innerWidth);
    });
  }
}
