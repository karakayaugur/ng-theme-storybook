import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '@app/shared/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private authService = inject(AuthService);
  private baseUrl: string = '/.netlify/functions';

  constructor(private http: HttpClient) {}

  signIn(payload: { email: string; password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.baseUrl}/sign-in`, payload).pipe(
      map((res) => {
        const jwtHelper = new JwtHelperService();
        const user = jwtHelper.decodeToken(res.token);
        const auth = {
          token: res.token,
          user: user,
        };
        this.authService.auth = auth;
        return auth;
      })
    );
  }
}
