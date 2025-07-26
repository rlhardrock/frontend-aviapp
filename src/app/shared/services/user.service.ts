import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private api = 'https://backend-aviapp-production.up.railway.app/avi';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http
    .get<{data: any[]}>(`${this.api}/users/user/list`)
    .pipe(
      tap(res => console.log('Respuesta del backend:', res)),
      map(res => res.data)
    );
  }
}
