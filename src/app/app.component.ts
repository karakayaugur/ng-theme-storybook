import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavMenuComponent } from "@app/components/nav-menu/nav-menu.component";
import { ThemeToggleComponent } from "@app/components/theme-toggle/theme-toggle.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, NavMenuComponent, ThemeToggleComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "storybook";
}
