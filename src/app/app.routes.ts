import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in',
  },
  {
    path: 'sign-in',
    loadComponent: () => import('./pages/public/sign-in/sign-in.page').then((m) => m.SignInPage),
  },
];
