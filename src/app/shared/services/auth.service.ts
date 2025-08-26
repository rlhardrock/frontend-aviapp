import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ROLE_KEY, TOKEN_KEY } from './auth.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /* private readonly TOKEN_KEY = 'avi_token'; */
  /* private readonly ROLE_KEY = 'avi_role'; */

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<{ access_token: string }>(
      'https://backend-aviapp-production.up.railway.app/avi/auth/login',
      { email, password }
    ).pipe(
      tap((res) => {
        localStorage.setItem(TOKEN_KEY, res.access_token);
        
        const payload = JSON.parse(atob(res.access_token.split('.')[1]));
        localStorage.setItem(ROLE_KEY, payload.role);
      })
    );
  }
  
  /* login(email: string, password: string): boolean {
    
    if (email === 'sena2025@sena.com' && password === 'soysena123') {
      localStorage.setItem(this.TOKEN_KEY, 'mock-token-123');
      localStorage.setItem(this.ROLE_KEY, 'ADMINISTRADOR');
      return true;
    }
    return false;
  } */

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ROLE_KEY);
    this.router.navigate(['/login']);
  }

  /* logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  } */

  isAuthenticated(): boolean {
    return !!localStorage.getItem(TOKEN_KEY);
  }

  getRole(): string | null {
    return localStorage.getItem(ROLE_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }
}
