import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ButtonComponent } from "@app/components/button/button.component";
@Component({
  selector: "app-buttons",
  imports: [CommonModule, ButtonComponent],
  templateUrl: "./buttons.component.html",
  styleUrl: "./buttons.component.css",
})
export class ButtonsComponent {}
