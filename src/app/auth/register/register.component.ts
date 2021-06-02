import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/category/category.model';
import { CategoryService } from 'src/app/category/category.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: string;
  categories = new FormControl();
  categoryList: Category[];

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private toastService: ToastrService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(response => this.categoryList = response);
  }

  onSubmit(form: NgForm): void {
    if (form.valid && form.value.password === form.value.confirmPassword) {
      this.authService.register(
        form.value.email, form.value.password, form.value.confirmPassword,
        form.value.firstName, form.value.lastName, form.value.phone,
        form.value.address, this.categories.value).subscribe(
          response => {
            this.authService.currentUser = response;
            this.toastService.success("Registration successful");
            this.router.navigate(['']);
          },
          () => this.error = "User with provided email already exists."
        );
    } else {
      this.error = "Passwords don't match!";
    }
  }

}
