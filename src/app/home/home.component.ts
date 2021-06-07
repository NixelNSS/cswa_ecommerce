import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../category/category.model';
import { CategoryService } from '../category/category.service';
import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[];
  searchValue: string = "";
  sliderValue: number = 0;
  categories = new FormControl();
  categoryList: Category[];
  rating: number;

  change() {
    
  }

  constructor(
    private productService: ProductService, 
    private router: Router,
    private shoppingCartService: ShoppingCartService,
    private toastService: ToastrService,
    private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe(response => this.products = response);
    this.shoppingCartService.getShoppingCartByUser();
    this.categoryService.getAll().subscribe(response => this.categoryList = response);
  }

  loadDetails(productId: number) {
    this.router.navigate(['product/details', productId]);
  }

  addToCart(productId: number) {
    this.shoppingCartService.addProduct(productId).subscribe(
      response => {
        this.shoppingCartService.shoppingCart = response;
        this.toastService.success("Item added.");
      }
    );
  }

  search(value: string): void {
    console.log(value);
    if (value == "")
      this.productService.getAll().subscribe(response => this.products = response);
    else
      this.productService.getBySearchCriteria(value).subscribe(response => this.products = response);
    this.sliderValue = 0;
  }

  getByPrice(value: string): void {
    this.searchValue = "";
    this.productService.getAllByPrice("0", value).subscribe(response => this.products = response);
  }

}
