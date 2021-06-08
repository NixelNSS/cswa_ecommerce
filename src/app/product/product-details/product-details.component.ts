import { ShoppingCartService } from './../../shopping-cart/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  displayedColumns: string[] = ["number", "name", "rating"];
  reviews = [
    {name: "Zoran Jokic", rating: 3},
    {name: "Milos Peric", rating: 4},
    {name: "Nikola Nikolic", rating: 2},
    {name: "Uros Urosevic", rating: 5}
  ];

  product: Product;

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
    private router: Router,
    private shoppingCartService: ShoppingCartService,
    private toastService: ToastrService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = + params['id'];
      this.productService.getById(id).subscribe(
        response => this.product = response,
        () => this.router.navigate(['/error404']));
   });
  }

  addToCart(productId: number) {
    this.shoppingCartService.addProduct(productId).subscribe(
      response => {
        this.shoppingCartService.shoppingCart = response;
        this.toastService.success("Item added.");
      }
    );
  }

}
