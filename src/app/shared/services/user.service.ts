import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, Observable } from 'rxjs';
import { UserListInter } from '../../interfaces/user-list-inter';

@Injectable({ providedIn: 'root' })
export class UserService {
  private api = 'https://backend-aviapp-production.up.railway.app/avi';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http
    .get<any>(`${this.api}/users/user/list`)
    .pipe(
      tap(res => console.log('Respuesta del backend user.service:', res)),
      map(res => res.users)
    );
  }

  registerUser(userData: any): Observable<any> {
    return this.http
    .post('/avi/users/user/register', userData);
  }
  
}
