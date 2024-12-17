import { Component, effect } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';
import { RegisterService } from '@core/http/register/register.service';
import {
  InputComponent,
  ContainerComponent,
  ButtonComponent,
} from '@shared/components';

import {
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  providers: [RegisterService],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    InputComponent,
    ContainerComponent,
    ButtonComponent,
  ],
})
export class SignUpComponent {
  form: FormGroup;
  loading: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    public registerService: RegisterService
  ) {
    effect(() => {
      console.log(`IsAuthorised: ${this.authService.isAuthorised}`);
    });
    this.form = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required]),
    });
  }

  onSubmit = () => {
    this.loading = true;
    const payload = {
      ...{
        email_address: this.form.value.email,
        client_current_time: new Date().toISOString(),
        consent: true,
        locale: 'en',
      },
    };

    this.registerService
      .signUp(payload)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((res) => {});
  };

  get f() {
    return this.form.controls;
  }
}
