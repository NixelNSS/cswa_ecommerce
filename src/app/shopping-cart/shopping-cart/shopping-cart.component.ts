import { ShoppingCartService } from './../shopping-cart.service';
import { ShoppingCart } from './../shopping-cart.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCart: ShoppingCart = this.shoppingCartService.shoppingCart;
  displayedColumns: string[] = ["number", "name", "price", "remove"];

  constructor(
    private shoppingCartService: ShoppingCartService, 
    private toastService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  buy(): void {
    this.shoppingCartService.buy().subscribe(
      response => {
        this.shoppingCartService.shoppingCart = response;
        this.shoppingCart = this.shoppingCartService.shoppingCart;
        this.toastService.success("Thank you for buying.");
        this.router.navigate(['']);
      }
    );
  }

  removeProduct(productId: number): void {
    this.shoppingCartService.removeProduct(productId).subscribe(
      response => {
        this.shoppingCartService.shoppingCart = response;
        this.shoppingCart = this.shoppingCartService.shoppingCart;
        this.toastService.success("Item removed.");
      }
    );
  }

}
