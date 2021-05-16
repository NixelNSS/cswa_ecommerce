import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: string;

  constructor(private authService: AuthService, private router: Router, private toastService: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    if (form.value.password === form.value.confirmPassword) {
      if (!this.authService.register(
        form.value.email, form.value.password, form.value.firstName,
        form.value.lastName, form.value.phone,
        form.value.address, form.value.favoriteCategories
      )) {
        this.error = "User with provided email already exists.";
      } else {
        this.toastService.success("Registration successful");
        this.router.navigate(['']);
      }
    } else {
      this.error = "Passwords don't match!";
    }

  }

}
