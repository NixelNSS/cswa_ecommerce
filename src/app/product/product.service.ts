import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(environment.apiUrl + "product/all");
  }

  getById(id: number): Observable<any> {
    return this.http.get(environment.apiUrl + "product/" + id);
  }

  getBySearchCriteria(value: string): Observable<any> {
    return this.http.get(environment.apiUrl + "product/criteria/" + value);
  }

  getAllByPrice(startPrice: string, endPrice: string): Observable<any> {
    return this.http.get(environment.apiUrl + "product", {
      params: new HttpParams().set('endPrice', endPrice)
    });
  }

}
