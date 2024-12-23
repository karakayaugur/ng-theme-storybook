import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ButtonComponent } from "@app/components/button/button.component";
@Component({
  selector: "app-home",
  imports: [CommonModule, ButtonComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {}
