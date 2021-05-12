import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public static users: User[] = [
    {
      id: 1,
      email: "test@test.com",
      password: "test123",
      firstName: "Jack",
      lastName: "Wolf",
      phone: "+3816711223344",
      address: "Test Adresa 1",
      favoriteCategories: "A"
    },
    {
      id: 2,
      email: "try@try.com",
      password: "try123",
      firstName: "Test",
      lastName: "Test",
      phone: "+3816711223344",
      address: "Test Adresa 1",
      favoriteCategories: "A"
    },
    {
      id: 3,
      email: "ge@ge.com",
      password: "ge123",
      firstName: "Test",
      lastName: "Test",
      phone: "+3816711223344",
      address: "Test Adresa 1",
      favoriteCategories: "A"
    }
  ];
  private static idCount = 3;

  constructor() {
    
  }

  create(user: User): void {
    UserService.idCount++;
    UserService.users.push(user);
  }

  update(user: User): void {

  }

  getUserByEmail(email: string): User {
    return UserService.users.find(user => user.email === email);
  }

  getFullName(user: User): string {
    return user.firstName + ' ' + user.lastName;
  }
}
