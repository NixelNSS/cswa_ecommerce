import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from "src/environments/environment";
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
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
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
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
