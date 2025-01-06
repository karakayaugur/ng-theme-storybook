import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { InputComponent } from "@app/components";

@Component({
  selector: "app-inputs",
  imports: [CommonModule, InputComponent],
  templateUrl: "./inputs.component.html",
  styleUrl: "./inputs.component.css",
})
export class InputsComponent {}
