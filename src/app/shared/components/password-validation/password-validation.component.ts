// password-validation.component.ts
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-password-validation',
    templateUrl: './password-validation.component.html',
    styleUrls: ['./password-validation.component.css'],
    imports: [CommonModule]
})
export class PasswordValidationComponent {
  @Input() control: AbstractControl | null = null;
}
