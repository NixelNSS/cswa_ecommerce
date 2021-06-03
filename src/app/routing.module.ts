import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders/orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'product/details/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
