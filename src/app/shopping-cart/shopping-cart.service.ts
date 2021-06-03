import { ShoppingCart } from './shopping-cart.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCart: ShoppingCart;

  constructor(private http: HttpClient) {}

  addProduct(productId: number): Observable<any> {
    const data = { "id": productId };
    return this.http.post(environment.apiUrl + "shoppingCart/product/add", data);
  }
  
  removeProduct(productId: number): Observable<any> {
    const data = { "id": productId };
    return this.http.post(environment.apiUrl + "shoppingCart/product/remove", data);
  }
  
  buy(): Observable<any>  {
    return this.http.post(environment.apiUrl + "shoppingCart/buy", {});
  }

  getShoppingCartByUser(): void {
    this.http.get<ShoppingCart>(environment.apiUrl + "shoppingCart")
      .subscribe(response => this.shoppingCart = response);
  }
}
