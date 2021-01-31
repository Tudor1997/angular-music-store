
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContentComponent } from './components/main-content/main-content.component';

import { ProductsComponent } from './components/products/products.component';
import { SecondNavbarComponent } from './components/second-navbar/second-navbar.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { GuitarsComponent } from './components/guitars/guitars.component';
import { ElectricGuitarsComponent } from './components/electric-guitars/electric-guitars.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './components/cart/product-list/product-list.component';
import { PageNotFountComponent } from './components/page-not-fount/page-not-fount.component';
import {ConfirmValidatorDirective} from './services/confirm-validator.directive'
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    ProductsComponent,
    SecondNavbarComponent,
    CartComponent,
    UserAccountComponent,
    RegisterComponent,
    ContactComponent,
    GuitarsComponent,
    ElectricGuitarsComponent,
    FooterComponent,
    NavbarComponent,
    ProductListComponent,
    PageNotFountComponent,
    ConfirmValidatorDirective
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
