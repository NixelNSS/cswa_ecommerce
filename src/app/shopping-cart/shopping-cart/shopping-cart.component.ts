import { ShoppingCartService } from './../shopping-cart.service';
import { ShoppingCart } from './../shopping-cart.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';

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
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  buy(): void {
    const dialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: "proceed with the payment"
      }
    });
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.shoppingCartService.buy().subscribe(
          response => {
            this.shoppingCartService.shoppingCart = response;
            this.shoppingCart = this.shoppingCartService.shoppingCart;
            this.toastService.success("Thank you for buying.");
            this.router.navigate(['']);
          }
        ); 
      }
    });
  }

  removeProduct(productId: number): void {
    const dialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: "remove this product from the shopping cart"
      }
    });
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.shoppingCartService.removeProduct(productId).subscribe(
          response => {
            this.shoppingCartService.shoppingCart = response;
            this.shoppingCart = this.shoppingCartService.shoppingCart;
            this.toastService.success("Item removed.");
          }
        );
      }
    });
  }

}
