import { inject, Injectable, InjectionToken } from '@angular/core';

export const systemConfig = {
  authServiceKey: 'user',
  unauthorizedRedirectTo: '401',
  authStorageType: 'sessionStorage',
  storageType: 'sessionStorage',
  siteTitle: 'Monga',
};
