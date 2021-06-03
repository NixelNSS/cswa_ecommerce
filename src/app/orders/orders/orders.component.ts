import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Order } from '../order.model';
import { OrdersService } from '../orders.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: MatTableDataSource<Order>; 
  displayedColumns: string[] = ["number", "amount", "count", "remove"];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private orderService: OrdersService,
    private toastService: ToastrService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.orderService.getAll().subscribe(response => {
      this.orders = new MatTableDataSource<Order>(response);
      this.orders.paginator = this.paginator;
      this.orders.sort = this.sort;
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
          this.orders = response;
          this.toastService.success("Item removed.");
        });
      }
    });
  }

}
