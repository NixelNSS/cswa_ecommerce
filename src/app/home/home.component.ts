import { Subcategory } from './../category/subcategory.model';
import { CountryService } from './../product/country.service';
import { Country } from './../product/country.model';
import { Component, OnInit, Output } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../category/category.model';
import { CategoryService } from '../category/category.service';
import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { SubcategoryService } from '../category/subcategory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[];
  searchValue: string = "";

  categories = new FormControl();
  categoryList: Category[];
  subcategories = new FormControl();
  subcategoryList: Subcategory[];
  countries = new FormControl();
  countryList: Country[];
  slider = new FormControl();
  rating = new FormControl();

  constructor(
    private productService: ProductService,
    private router: Router,
    private shoppingCartService: ShoppingCartService,
    private toastService: ToastrService,
    private categoryService: CategoryService,
    private subcategoryService: SubcategoryService,
    private countryService: CountryService) { }

  ngOnInit(): void {
    this.shoppingCartService.getShoppingCartByUser();
    this.productService.getAll().subscribe(response => this.products = response);
    this.categoryService.getAll().subscribe(response => this.categoryList = response);
    this.subcategoryService.getAll().subscribe(response => this.subcategoryList = response);
    this.countryService.getAll().subscribe(response => this.countryList = response);
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
  }

  onSubmit(form: NgForm): void {
    if (this.categories.value != null) {
      this.productService.getAllByCategoryAndFilters(
        this.categories.value,
        this.countries.value,
        this.slider.value,
        this.rating.value
      ).subscribe(response => this.products = response);
      return;
    }
    this.productService.getAllBySubcategoryAndFilters(
      this.subcategories.value,
      this.countries.value,
      this.slider.value,
      this.rating.value
    ).subscribe(response => this.products = response);
  }

  categorySelected(): void {
    this.subcategories = new FormControl();
  }

  subcategorySelected(): void {
    this.categories = new FormControl();
  }

}
