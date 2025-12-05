import { Component, inject, signal, Signal, WritableSignal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserService } from '@app/core/api/user.service';
import { SharedUi } from '@shared/shared-ui';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  imports: [SharedUi, ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.css'],
})
export class SignInPage {
  private readonly userService = inject(UserService);

  form!: FormGroup;
  public loading: WritableSignal<boolean> = signal(false);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    this.loading.set(true);
    this.userService.signIn(this.form.value).subscribe({
      next: (res) => {
        console.log('Signed in successfully', res);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loading.set(false);
      },
    });
  }
}
