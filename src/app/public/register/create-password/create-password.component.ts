import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from '@core/http';
import { ValidatorService } from '@core/utils';
import { finalize } from 'rxjs/operators';
import {
  InputComponent,
  ContainerComponent,
  ButtonComponent,
  PasswordValidationComponent,
} from '@shared/components';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.css'],
  providers: [RegisterService, ValidatorService],
  imports: [
    ContainerComponent,
    InputComponent,
    ButtonComponent,
    PasswordValidationComponent,
    ReactiveFormsModule,
  ],
})
export class CreatePasswordComponent implements OnInit {
  form: FormGroup;
  uuid?: string;
  loading = false;

  constructor(
    private registerService: RegisterService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private validatorService: ValidatorService
  ) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.uuid = params['uuid'];
      if (this.uuid) {
        this.verifyEmail();
      }
    });
  }

  private createForm(): FormGroup {
    return this.fb.group({
      password: [
        '',
        [Validators.required, this.validatorService.passwordValidator],
      ],
    });
  }

  private verifyEmail(): void {
    this.loading = true;
    this.registerService
      .verifyEmail(this.uuid!)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe();
  }

  onSubmit(): void {
    // Add your submit logic here
  }
}
