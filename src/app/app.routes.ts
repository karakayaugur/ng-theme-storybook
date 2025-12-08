import { Routes } from '@angular/router';
import { Settings } from './pages/settings/settings';
import { Profile } from './pages/settings/profile/profile';
import { SignIn } from './pages/public/sign-in/sign-in';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in',
  },

  {
    path: 'sign-in',
    component: SignIn,
  },

  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
  },

  {
    path: 'products',
    loadComponent: () => import('./pages/products/products').then((m) => m.Products),
  },

  {
    path: 'orders',
    loadComponent: () => import('./pages/orders/orders').then((m) => m.Orders),
  },

  {
    path: 'customers',
    loadComponent: () => import('./pages/customers/customers').then((m) => m.Customers),
  },

  {
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings').then((m) => m.Settings),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'profile',
      },
      {
        path: 'profile',
        component: Profile,
      },
    ],
  },

  {
    path: '**',
    loadComponent: () => import('./pages/public/not-found/not-found').then((m) => m.NotFound),
  },
];
