import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReqLogin, IResLogin } from '@core/http/register/register.interface';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  private readonly url = 'x-api/api/oauth/token';
  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  });

  constructor(private http: HttpClient) {}

  login(payload: IReqLogin): Observable<IResLogin> {
    const params = new HttpParams({
      fromObject: {
        ...payload,
        grant_type: 'password',
      },
    });

    return this.http.post<IResLogin>(this.url, params.toString(), {
      headers: this.headers,
    });
  }
}
