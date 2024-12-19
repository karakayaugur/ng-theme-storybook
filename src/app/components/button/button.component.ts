import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-button",
  imports: [CommonModule],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.css",
})
export class ButtonComponent {
  constructor() {}
  @Input() isDisabled: boolean = false;
  @Input() loading: boolean = true;
  @Input() color: "default" | "primary" | "secondary" | "danger" | "success" =
    "default";
  @Input() size: "default" | "small" | "large" = "default";
  @Input() block: boolean = true;
  @Input() label: string = "Button";
  @Input() radius: string = "0.375rem";
  @Input() type: "button" | "submit" | "reset" = "button";
  @Input() fontFace: "Inter" | "Manrope" | "Nunito" | "Raleway" = "Inter";
  @Output() onClick = new EventEmitter<any>();

  handleClick(event: any) {
    this.onClick.emit(event);
  }
}
