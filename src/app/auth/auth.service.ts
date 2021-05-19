import { User } from './user/user.model';
import { Injectable } from '@angular/core';
import { UserService } from './user/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User = UserService.users[0];

  constructor(private userService: UserService, private router: Router) { }

  login(email: string, password: string): boolean {
    let user: User = this.getUserByEmailAndPassword(email, password);
    if (user) {
      this.currentUser = user;
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

  getUserByEmailAndPassword(email: string, password: string): User {
    return UserService.users.find(user => (
      user.email == email &&
      user.password == password));
  }

  register(email: string, password: string, firstName: string, lastName: string, phone: string, address: string, favoriteCategories: string[]): boolean {
    let user: User = this.userService.create(email, password, firstName, lastName, phone, address, favoriteCategories);
    if (user) {
      this.currentUser = user;
      return true;
    }
    return false;
  }

  getCurrentUserDisplayName(): string {
    return this.userService.getFullName(this.currentUser);
  }
}
