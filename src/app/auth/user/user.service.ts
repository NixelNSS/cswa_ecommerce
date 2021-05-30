import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthService, private http: HttpClient) {

  }

  update(firstName: string, lastName: string, phone: string, address: string, favoriteCategories: string[]): Observable<any> {
    const data = {"firstName": firstName, "lastName": lastName, "phone": phone, "address": address};
    return this.http.put(environment.apiUrl + "user", data);
  }

}
