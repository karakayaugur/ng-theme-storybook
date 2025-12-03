import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = '/.netlify/functions';

  constructor(private http: HttpClient) {}

  hello(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(`${this.baseUrl}/hello`);
  }
}
