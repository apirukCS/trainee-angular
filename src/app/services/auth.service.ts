import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPayload } from './auth/login-payload.model';
import { Observable, tap } from 'rxjs';
import { ResponseLogin } from './auth/response-login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(payload: LoginPayload): Observable<ResponseLogin> {
    return this.http
      .post<ResponseLogin>('https://dev6.resrun-pos.com/api/login', payload)
      .pipe(
        tap((response: ResponseLogin) => {
          sessionStorage.setItem('access_token', response.res.token);
        })
      );
  }
}
