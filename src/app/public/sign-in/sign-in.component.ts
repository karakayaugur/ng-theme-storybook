import { Component, effect, QueryList } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';
import { RegisterService } from '@core/http/register/register.service';
import {
  InputComponent,
  InputPasswordComponent,
  ContainerComponent,
  ButtonComponent,
} from '@shared/components';

import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  providers: [RegisterService],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    InputComponent,
    InputPasswordComponent,
    ContainerComponent,
    ButtonComponent,
  ],
})
export class SignInComponent {
  form: FormGroup;
  loading: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    public registerService: RegisterService,
    private router: Router
  ) {
    effect(() => {
      console.log(`IsAuthorised: ${this.authService.isAuthorised}`);
    });
    this.form = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit = () => {
    this.loading = true;
    this.registerService
      .signIn(this.form.value)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((res) => {
        this.router.navigate(['/otp'], {
          queryParams: {
            mfa_id: res.mfa_id,
            expires_in: res.expires_in,
            token_type: res.token_type,
            mfa_channel: res.mfa_channel ?? 'SMS',
            mfa_address: res.mfa_address,
          },
        });
      });
  };
  get f() {
    return this.form.controls;
  }
}
