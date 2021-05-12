import { User } from './user/user.model';
import { Injectable } from '@angular/core';
import { UserService } from './user/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User = UserService.users[0];

  constructor(private userService: UserService, private router: Router) {}

  login() { }

  logout():void {
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

  register() { }

  checkIfUserWithProvidedEmailAlreadyExists() { }

  getCurrentUserDisplayName(): string { 
    return this.userService.getFullName(this.currentUser);
  }
}
