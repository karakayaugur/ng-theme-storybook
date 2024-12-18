import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-nav-menu",
  templateUrl: "./nav-menu.component.html",
  styleUrl: "./nav-menu.component.css",
  imports: [RouterLink],
})
export class NavMenuComponent {
  menuItems = [
    { title: "Home", url: "/home" },
    { title: "Button", url: "/buttons" },
    { title: "Input", url: "/inputs" },
    { title: "Radio", url: "/radio" },
  ];
}
