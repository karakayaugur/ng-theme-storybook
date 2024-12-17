import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from '@shared/components';

@Component({
    selector: 'app-verify-email',
    templateUrl: './verify-email.component.html',
    styleUrl: './verify-email.component.css',
    imports: [RouterModule, ContainerComponent]
})
export class VerifyEmailComponent {
  constructor() {}
}
