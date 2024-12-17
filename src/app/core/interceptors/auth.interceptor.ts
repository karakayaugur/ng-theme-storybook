import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const excludedUrls: string[] = [];

  if (!excludedUrls.includes(req.url)) {
    const headers = {
      'Client-Date': new Date().getTime().toString(),
    };

    console.log('AuthInterceptor', headers);
    req = req.clone({ setHeaders: headers });
  }

  return next(req);
};
