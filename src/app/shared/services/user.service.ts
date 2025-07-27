import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, Observable } from 'rxjs';
import { UserListInter } from '../../interfaces/user-list-inter';

@Injectable({ providedIn: 'root' })
export class UserService {
  private api = 'https://backend-aviapp-production.up.railway.app/avi';

  constructor(private http: HttpClient) {}

  getUsers(page: number, limit: number = 7): Observable<UserListInter> {
    return this.http
    .get<any>(`${this.api}/users/user/list?page=${page}&limit=${limit}`, {params:{page: page.toString()}})
    .pipe(
      tap(res => console.log('Respuesta del backend:', res)),
      map(res => res.users)
    );
  }
}
