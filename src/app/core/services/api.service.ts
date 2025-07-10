import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://tu-backend.railway.app/api';

  getUsers() {
    return this.http.get(`${this.baseUrl}/users`);
  }

  login(credentials: { email: string; password: string }) {
    return this.http.post(`${this.baseUrl}/auth/login`, credentials);
  }
}
