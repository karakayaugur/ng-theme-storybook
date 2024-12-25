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
  @Output() onClick = new EventEmitter<any>();

  @Input() isDisabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: "default" | "primary" | "warning" | "danger" | "success" =
    "default";
  @Input() size: "" | "x-small" | "small" | "large" | "x-large" = "";

  handleClick(event: any) {
    this.onClick.emit(event);
  }
}
