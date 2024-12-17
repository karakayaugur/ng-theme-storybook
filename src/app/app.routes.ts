import { Routes } from '@angular/router';
import {
  SignInComponent,
  SignUpComponent,
  VerifyEmailComponent,
  CreatePasswordComponent,
} from '@app/public/index';

import { OtpComponent } from '@app/public/otp/otp.component';

export const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  {
    path: 'sign-in',
    component: SignInComponent,
    data: {},
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    data: {},
  },
  {
    path: 'verify-email',
    component: VerifyEmailComponent,
    data: {},
  },
  {
    path: 'create-password/:uuid',
    component: CreatePasswordComponent,
    data: {},
  },
  { path: 'otp', component: OtpComponent },
];
