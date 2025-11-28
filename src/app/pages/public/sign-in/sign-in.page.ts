import { Component, signal, Signal, WritableSignal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { SharedUi } from '@shared/shared-ui';

@Component({
  selector: 'app-sign-in',
  imports: [SharedUi, ReactiveFormsModule],
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.css'],
})
export class SignInPage {
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
    // if (this.form.valid) {
    //   const { email, password } = this.form.value;
    //   setTimeout(() => {
    //     console.log('User signed in with', { email, password });
    //     this.loading.set(false);
    //   }, 12000);
    // } else {
    //   this.loading.set(false);
    // }
  }
}
