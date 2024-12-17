import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class ClientTokenService {
  private clientReference: any;
  private readonly tokenUrl =
    '/x-api/api/oauth/token?grant_type=client_credentials';

  constructor(private http: HttpClient) {}

  clientToken(): Observable<any> {
    if (this.isTokenValid()) {
      return of(this.clientReference).pipe(
        map(() => this.createAuthHeader(this.clientReference.access_token))
      );
    }

    return this.http.post<any>(this.tokenUrl, {}).pipe(
      map((response) => {
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(response.access_token);
        this.clientReference = response;
        this.clientReference.exp = decodedToken.exp;
        return this.createAuthHeader(this.clientReference.access_token);
      })
    );
  }

  private isTokenValid(): boolean {
    return (
      this.clientReference &&
      this.clientReference.exp - Math.floor(Date.now() / 1000) > 0
    );
  }

  private createAuthHeader(token: string): { Authorization: string } {
    return {
      Authorization: 'Bearer ' + token,
    };
  }
}
