import { Component } from "@angular/core";
import { ThemeService } from "./theme.services";

@Component({
  selector: "app-theme-toggle",
  templateUrl: "./theme-toggle.component.html",
  styleUrl: "./theme-toggle.component.css",
})
export class ThemeToggleComponent {
  constructor(private themeService: ThemeService) {}
  handleClick() {
    this.themeService.toggleTheme();
  }
}
