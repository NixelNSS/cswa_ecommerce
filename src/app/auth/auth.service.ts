import { environment } from './../../environments/environment';
import { User } from './user/user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { Category } from '../category/category.model';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User = null;

  constructor(
    private router: Router, 
    private http: HttpClient, 
    private tokenStorageService: TokenStorageService,
    private shoppingCartService: ShoppingCartService) { }

  login(email: string, password: string): Observable<any> {
    const data = { "email": email, "password": password };
    return this.http.post(environment.apiUrl + "auth/authenticate", data);
  }

  logout(): void {
    this.tokenStorageService.logout();
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

  register(email: string, password: string, confirmPassword: string, firstName: string, lastName: string, phone: string, address: string, favoriteCategories: Category[]): Observable<User> {
    const data = { "email": email, "password": password, "confirmPassword": confirmPassword, "firstName": firstName, "lastName": lastName, "phone": phone, "address": address, "favoriteCategories": favoriteCategories };
    return this.http.post<User>(environment.apiUrl + "auth/register", data);
  }

  changePassword(oldPassword: string, newPassword: string): Observable<any> {
    const data = { "email": this.currentUser.email, "oldPassword": oldPassword, "newPassword": newPassword, "confirmPassword": newPassword };
    return this.http.put(environment.apiUrl + "auth/changePassword", data);
  }

  getCurrentUserDisplayName(): string {
    return this.currentUser.firstName + " " + this.currentUser.lastName;
  }

  updateCurrentUserAfterPersonalInformationUpdate(user: User): void {
    this.tokenStorageService.saveUser(user);
    this.currentUser = this.tokenStorageService.getUser();
  }

  updateCurrentUser(): void {
    const user = this.tokenStorageService.getUser();
    if (user != null) {
      this.currentUser = user;
    }
  }

  updateCurrentUserAfterLogin(response: any): void {
    this.tokenStorageService.saveToken(response.token);
    let user: User = {
      id: response.id,
      email: response.email,
      password: null,
      firstName: response.firstName,
      lastName: response.lastName,
      phone: response.phone,
      address: response.address,
      favoriteCategories: response.favoriteCategories
    };
    this.tokenStorageService.saveUser(user);
    this.currentUser = this.tokenStorageService.getUser();
  }

}
