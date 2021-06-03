import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  deleteById(orderId: number): Observable<any> {
    return this.http.delete(environment.apiUrl + "order/" + orderId);
  }

  getAll(): Observable<any> {
    return this.http.get(environment.apiUrl + "order");
  }

}
