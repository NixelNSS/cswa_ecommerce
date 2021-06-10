import { ReviewService } from './../../shared/review/review.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Order } from '../order.model';
import { OrdersService } from '../orders.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { BarRating } from 'ngx-bar-rating';
import { Review } from 'src/app/shared/review/review.model';
import { Product } from 'src/app/product/product.model';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  products: Product[];
  productDisplayedColumns: string[] = ["number", "name", "rating", "product-details"];

  orders: MatTableDataSource<Order>; 
  displayedColumns: string[] = ["number", "datetime", "address", "amount", "products", "status", "received", "cancel", "remove"];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ratings: number[];

  constructor(
    private orderService: OrdersService,
    private toastService: ToastrService,
    private dialog: MatDialog,
    private router: Router,
    private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.orderService.getAll().subscribe(response => {
      this.orders = new MatTableDataSource<Order>(response);
      this.orders.paginator = this.paginator;
      this.orders.sort = this.sort;
      console.log(response);
    });
  }

  deleteById(id: number): void {
    const dialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: "remove this order permanently"
      }
    });
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.orderService.deleteById(id).subscribe(response => {
          this.orders = new MatTableDataSource<Order>(response);
          this.orders.paginator = this.paginator;
          this.orders.sort = this.sort;
          this.toastService.success("Item removed.");
        });
      }
    });
  }

  loadDetails(productId: number): void {
    this.router.navigate(['product/details', productId]);
  }

  addReview(value: BarRating, productId: number, orderId: number): void {
    const dialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: "rate this product"
      }
    });
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.reviewService.addReview(value.rate, productId, orderId).subscribe(response => {
          this.orders = new MatTableDataSource<Order>(response);
          this.orders.paginator = this.paginator;
          this.orders.sort = this.sort;
          this.toastService.success("Product is reviewed successfully.");
        });
      }
    });
  }

  markReceived(orderId: number): void {
    const dialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: "mark this order as received"
      }
    });
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.orderService.markAsReceived(orderId).subscribe(response => {
          this.orders = new MatTableDataSource<Order>(response);
          this.orders.paginator = this.paginator;
          this.orders.sort = this.sort;
          this.toastService.success("Order is marked as received.");
        });
      }
    });
  }

  markCanceled(orderId: number): void {
    const dialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: "mark this order as canceled"
      }
    });
    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.orderService.markAsCanceled(orderId).subscribe(response => {
          this.orders = new MatTableDataSource<Order>(response);
          this.orders.paginator = this.paginator;
          this.orders.sort = this.sort;
          this.toastService.success("Order is marked as canceled.");
        });
      }
    });
  }

  getReviewValue(productId: number, orderId: number): number {
    let num: number = undefined;
    if (this.orders.data != undefined) {
      let order: Order = this.orders.data.find(o => o.id === orderId);
      if (order.reviews.length > 0) {
        let review: Review = order.reviews.find(r => r.product.id === productId);
        if (review != undefined) {
          num = review.value;
        }
      }
    }
    return num;
  }

}
