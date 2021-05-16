import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public static users: User[] = [
    {
      id: 1,
      email: "nikola@nikola.com",
      password: "nikola12",
      firstName: "Nikola",
      lastName: "Kostic",
      phone: "+381652332222",
      address: "Bul. Kralja Aleksandra 2",
      favoriteCategories: "A"
    },
    {
      id: 2,
      email: "try@try.com",
      password: "try12345",
      firstName: "Try",
      lastName: "Try",
      phone: "+38163456753",
      address: "Bul. Kralja Aleksandra 2",
      favoriteCategories: "A"
    },
    {
      id: 3,
      email: "gerge@gerge.com",
      password: "gerge123",
      firstName: "Gerge",
      lastName: "Gerge",
      phone: "+38160874322566",
      address: "Bul. Kralja Aleksandra 2",
      favoriteCategories: "A"
    }
  ];
  private static idCount = 4;

  constructor() {

  }

  create(email: string, password: string, firstName: string, lastName: string, phone: string, address: string, favoriteCategories: string): User {
    if (!this.doesUserWithProvidedEmailAlreadyExists(email)) {
      let user: User = {
        id: UserService.idCount,
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        address: address,
        favoriteCategories: favoriteCategories
      }
      console.log(user);
      UserService.idCount++;
      UserService.users.push(user);
      return user;
    }
    return null;
  }

  update(id: number, firstName: string, lastName: string, phone: string, address: string, favoriteCategories: string): void {
    let user: User = this.getUserById(id);
    let index = UserService.users.indexOf(user);
    user.firstName = firstName;
    user.lastName = lastName;
    user.phone = phone;
    user.address = address;
    user.favoriteCategories = favoriteCategories;
    UserService.users[index] = user;
  }

  changePassword(id: number, password: string): void {
    let user: User = this.getUserById(id);
    let index = UserService.users.indexOf(user);
    user.password = password;
    UserService.users[index] = user;
  }

  getUserById(id: number): User {
    return UserService.users.find(user => user.id === id);
  }

  getUserByEmail(email: string): User {
    return UserService.users.find(user => user.email === email);
  }

  getFullName(user: User): string {
    return user.firstName + ' ' + user.lastName;
  }

  doesUserWithProvidedEmailAlreadyExists(email: string): boolean {
    if (UserService.users.find(user => (user.email == email))) return true;
    return false;
  }
}
