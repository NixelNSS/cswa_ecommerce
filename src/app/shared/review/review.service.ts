import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  addReview(value: number, productId: number, orderId: number): Observable<any> {
    const data = {"value" : value, "productId" : productId, "orderId" : orderId};
    return this.http.post(environment.apiUrl + "review", data);
  }

}
