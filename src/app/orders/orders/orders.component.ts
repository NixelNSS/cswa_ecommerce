import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[];
  displayedColumns: string[] = ["number", "amount", "count", "remove"];

  constructor(
    private orderService: OrdersService,
    private toastService: ToastrService) { }

  ngOnInit(): void {
    this.orderService.getAll().subscribe(response => this.orders = response);
  }

  deleteById(id: number): void {
    this.orderService.deleteById(id).subscribe(response => {
      this.orders = response;
      this.toastService.success("Item removed.");
    });
  }

}
