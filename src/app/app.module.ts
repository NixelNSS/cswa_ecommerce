import { CountryService } from './shared/country/country.service';
import { CategoryService } from 'src/app/category/category.service';
import { ReviewService } from './shared/review/review.service';
import { OrdersService } from './orders/orders.service';
import { OrdersComponent } from './orders/orders/orders.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MaterialModule } from './material.module';
import { ProfileComponent } from './auth/profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { UserService } from './auth/user/user.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { PersonalInformationComponent } from './auth/profile/personal-information/personal-information.component';
import { PasswordComponent } from './auth/profile/password/password.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ToastrModule } from 'ngx-toastr';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenStorageService } from './auth/token-storage.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart/shopping-cart.component';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';
import { ProductService } from './product/product.service';
import { BarRatingModule } from "ngx-bar-rating";
import { NgxPaginationModule } from 'ngx-pagination';
import { BuyDialogComponent } from './shopping-cart/buy-dialog/buy-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    NavbarComponent,
    PersonalInformationComponent,
    PasswordComponent,
    ConfirmationDialogComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    OrdersComponent,
    BuyDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BarRatingModule,
    NgxPaginationModule,
    ToastrModule.forRoot(
      {  
        positionClass: 'toast-bottom-right',  
        closeButton: true,
      } 
    )
  ],
  providers: [
    AuthService,
    UserService,
    AuthGuardService,
    TokenStorageService,
    ProductService,
    ShoppingCartService,
    OrdersService,
    ReviewService,
    CategoryService,
    CountryService,
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptorService, 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
