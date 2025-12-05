import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { SharedUi } from '@shared/shared-ui';

@Component({
  selector: 'app-dasboard',
  imports: [SharedUi, ReactiveFormsModule],
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.css'],
})
export class DashboardPage {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {}
}
