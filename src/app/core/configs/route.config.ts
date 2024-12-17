import { Permission } from '../enum';
import { systemConfig } from './system.config';

export const routeConfig = {
  login: { title: 'Login' },
  home: {
    title: 'Home',
    permissions: {
      only: [Permission.APP_ACCESS],
      redirectTo: systemConfig.unauthorizedRedirectTo,
    },
  },
  transaction: {
    title: 'Transactions',
    permissions: {
      only: [Permission.APP_ACCESS],
      redirectTo: systemConfig.unauthorizedRedirectTo,
    },
  },
  'hofi-card': {
    title: 'Hofi Card',
    permissions: {
      only: [Permission.APP_ACCESS],
      redirectTo: systemConfig.unauthorizedRedirectTo,
    },
  },
  account: {
    title: 'Account',
    permissions: {
      only: [Permission.APP_ACCESS],
      redirectTo: systemConfig.unauthorizedRedirectTo,
    },
  },
  profile: {
    title: 'Profile',
    permissions: {
      only: [Permission.APP_ACCESS],
      redirectTo: systemConfig.unauthorizedRedirectTo,
    },
  },
  settings: {
    title: 'Settings',
    permissions: {
      only: [Permission.APP_ACCESS],
      redirectTo: systemConfig.unauthorizedRedirectTo,
    },
  },
  support: {
    title: 'Support',
    permissions: {
      only: [Permission.APP_ACCESS],
      redirectTo: systemConfig.unauthorizedRedirectTo,
    },
  },
  deposit: {
    title: 'Deposit',
    permissions: {
      only: [Permission.APP_ACCESS],
      redirectTo: systemConfig.unauthorizedRedirectTo,
    },
  },
  transfer: {
    title: 'Pay & Transfer',
    permissions: {
      only: [Permission.APP_ACCESS],
      redirectTo: systemConfig.unauthorizedRedirectTo,
    },
  },
  // register
  register: {
    title: 'Register',
  },
  // forgot password
  'send-code': {
    title: 'Forgot Password',
  },
  'terms-conditions': {
    title: 'Terms & Conditions',
    permissions: {
      only: [Permission.APP_ACCESS],
      redirectTo: systemConfig.unauthorizedRedirectTo,
    },
  },
  'privay-policy': {
    title: 'privay-policy',
    permissions: {
      only: [Permission.APP_ACCESS],
      redirectTo: systemConfig.unauthorizedRedirectTo,
    },
  },
  'complaints-procedures': {
    title: 'complaints-procedures',
    permissions: {
      only: [Permission.APP_ACCESS],
      redirectTo: systemConfig.unauthorizedRedirectTo,
    },
  },

  'code-sent': {
    title: 'Check your inbox',
  },
  'enter-code': {
    title: 'Enter Code',
  },
  reset: {
    title: 'Reset Password',
  },
};
