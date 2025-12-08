import { Routes } from '@angular/router';
import { SettingsPage } from './pages/settings/settings.page';
import { ProfilePage } from './pages/settings/profile/profile.page';
import { SignInPage } from './pages/public/sign-in/sign-in.page';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.page').then((m) => m.DashboardPage),
  },
  {
    path: 'sign-in',
    component: SignInPage,
  },

  {
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings.page').then((m) => m.SettingsPage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'profile',
      },
      {
        path: 'profile',
        component: ProfilePage,
      },
    ],
  },

  {
    path: '**',
    loadComponent: () =>
      import('./pages/public/not-found/not-found.page').then((m) => m.NotFoundPage),
  },
];
