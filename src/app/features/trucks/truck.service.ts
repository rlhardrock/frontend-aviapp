import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TruckService {
  private api = 'https://backend-aviapp-production.up.railway.app/avi';

  constructor(private http: HttpClient) {}

  getTrucks(): Observable<any> {
    return this.http
    .get<any>(`${this.api}/trucks/truck/list`)
    .pipe(
      tap(res => console.log('Respuesta del backend truck.service:', res)),
      map(res => res.trucks)
    );
  }

  registerTruck(truckData: any): Observable<any> {
    return this.http
    .post(`${this.api}/trucks/truck/register`, truckData);
  }

  deleteTruck(id: string): Observable<any> {
    return this.http
    .delete(`${this.api}/trucks/truck/id/${id}`);
  }
  
  getTruckById(id: string): Observable<any> {
    return this.http.get(`${this.api}/trucks/truck/id/${id}`);
  }
  
  updateTruck(id: string, data: any): Observable<any> {
    return this.http.patch(`${this.api}/trucks/truck/id/${id}`, data);
  }
  
  bulkUploadTrucks(trucks: any[]): Observable<{message: string; invalid? any[]}> {
    return this.http.post<{message: string; invalid? any[]}>(`${this.api}/trucks/truck/bulk-upload`, { trucks });
  }
}
