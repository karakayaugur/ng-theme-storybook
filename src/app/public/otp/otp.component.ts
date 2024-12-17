import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@shared/services';
import { RegisterService } from '@core/http';
import {
  ButtonComponent,
  PinInputComponent,
  ContainerComponent,
} from '@shared/components';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
    selector: 'app-otp',
    templateUrl: './otp.component.html',
    styleUrl: './otp.component.css',
    providers: [RegisterService],
    imports: [
        ReactiveFormsModule,
        ContainerComponent,
        ButtonComponent,
        PinInputComponent,
    ]
})
export class OtpComponent {
  form: FormGroup;
  loading: boolean = false;
  constructor(
    public authService: AuthService,
    public registerService: RegisterService,
    public route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      mfa_channel: new FormControl('', [Validators.required, Validators.email]),
      mfa_id: new FormControl('', [Validators.required]),
      mfa_code: new FormControl('', [Validators.required]),
    });
    this.route.queryParams.subscribe((params) => {
      this.form.patchValue({
        mfa_id: params['mfa_id'],
        mfa_channel: params['mfa_channel'],
      });
    });
  }

  ngOnInit(): void {}

  onSubmit = () => {};
}
