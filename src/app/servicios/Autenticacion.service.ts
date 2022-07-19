import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginUsuario } from '../models/login-usuario';
import { Observable } from 'rxjs';

const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  alkemyURL = environment.alkemyURL;

  constructor(private http: HttpClient) {}

  public login(loginUsuario: LoginUsuario): Observable<any> {
    return this.http.post<any>(this.alkemyURL, loginUsuario);
  }

  public setToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }
}
