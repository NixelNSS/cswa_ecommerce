import { ShoppingCart } from './shopping-cart.model';
import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCart: ShoppingCart;

  constructor(private http: HttpClient) {}

  addProduct(productId: number): Observable<any> {
    return this.http.post(environment.apiUrl + "shoppingCart/product/add", {"id": productId});
  }
  
  removeProduct(productId: number): Observable<any> {
    return this.http.post(environment.apiUrl + "shoppingCart/product/remove", {"id": productId});
  }

  decreaseProduct(productId: number): Observable<any> {
    return this.http.post(environment.apiUrl + "shoppingCart/product/decrease", {"id": productId});
  }
  
  buy(address: string): Observable<any>  {
    if (address != "") {
      console.log("A");
      return this.http.post(environment.apiUrl + "shoppingCart/buy", {}, {
        params: new HttpParams().set('address', address)
      });
    }
    console.log("B");
    return this.http.post(environment.apiUrl + "shoppingCart/buy", {});
  }

  loadShoppingCartByUser(): void {
    this.http.get<ShoppingCart>(environment.apiUrl + "shoppingCart")
      .subscribe(response => this.shoppingCart = response);
  }

  getShoppingCartByUser(): Observable<any> {
    return this.http.get(environment.apiUrl + "shoppingCart");
  }
}
