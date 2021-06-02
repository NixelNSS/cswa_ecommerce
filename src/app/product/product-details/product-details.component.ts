import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = + params['id']; // (+) converts string 'id' to a number
      this.productService.getById(id).subscribe(
        response => this.product = response,
        () => this.router.navigate(['/error404']));
   });
  }

}
