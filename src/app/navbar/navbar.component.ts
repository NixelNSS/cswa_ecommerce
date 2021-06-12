import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, private shoppingCartService: ShoppingCartService) {}

  getCount() {
    if (this.shoppingCartService.shoppingCart)
      return this.shoppingCartService.shoppingCart.count;
    else
      return 0;
  }

  ngOnInit(): void {
    if (this.authService.currentUser != null)
      this.shoppingCartService.loadShoppingCartByUser();
  }

  logout(): void {
    this.authService.logout();
  }

}
