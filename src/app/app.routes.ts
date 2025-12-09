import { Routes } from '@angular/router';
import { MainLayoutComponent, AuthLayoutComponent } from '@shared/features/index';

import { Settings } from './pages/settings/settings';
import { Profile } from './pages/settings/profile/profile';
import { SignIn } from './pages/public/sign-in/sign-in';
import { Users } from './pages/settings/users/users';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'sign-in',
        component: SignIn,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sign-in',
      },
    ],
  },

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: 'products',
        loadComponent: () => import('./pages/products/products').then((m) => m.Products),
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
          {
            path: 'users',
            component: Users,
          },
        ],
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
    ],
  },

  {
    path: '**',
    loadComponent: () => import('./pages/public/not-found/not-found').then((m) => m.NotFound),
  },
];
