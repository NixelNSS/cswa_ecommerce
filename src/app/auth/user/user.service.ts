import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/category/category.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  update(firstName: string, lastName: string, phone: string, address: string, favoriteCategories: Category[]): Observable<any> {
    const data = {"firstName": firstName, "lastName": lastName, "phone": phone, "address": address, "favoriteCategories": favoriteCategories};
    return this.http.put(environment.apiUrl + "user", data);
  }

}
