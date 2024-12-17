import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';
import { IReqLogin, IResLogin } from '@core/http/register/register.interface';
import { ClientTokenService } from '@shared/services/client-token.service';

@Injectable()
export class RegisterService {
  private readonly signInUrl = 'x-api/api/oauth/token';
  private readonly endpointUrl = `x-api/api/v1/registration`;

  private readonly signInheaders = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  });

  constructor(
    private http: HttpClient,
    private clientTokenService: ClientTokenService
  ) {}

  signIn(payload: IReqLogin): Observable<IResLogin> {
    const params = new HttpParams({
      fromObject: {
        ...payload,
        grant_type: 'password',
      },
    });

    return this.http.post<IResLogin>(this.signInUrl, params.toString(), {
      headers: this.signInheaders,
    });
  }

  signUp(params: any): Observable<any> {
    return this.clientTokenService
      .clientToken()
      .pipe(
        mergeMap((authHeader) =>
          this.http
            .post<any>(this.endpointUrl, params, { headers: authHeader })
            .pipe(map((response) => response))
        )
      );
  }

  verifyEmail(uuid: string): Observable<any> {
    return this.clientTokenService.clientToken().pipe(
      mergeMap((authHeader) => {
        const url = `${this.endpointUrl}/verify-email?verificationId=${uuid}`;
        return this.http.post<any>(url, {}, { headers: authHeader }).pipe(
          map((response) => {
            return response;
          })
        );
      })
    );
  }
}
