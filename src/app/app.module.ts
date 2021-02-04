
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

import { ContactComponent } from './components/contact/contact.component';
import { GuitarsComponent } from './components/guitars/guitars.component';
import { ElectricGuitarsComponent } from './components/electric-guitars/electric-guitars.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PageNotFountComponent } from './components/page-not-fount/page-not-fount.component';
import {ConfirmValidatorDirective} from './services/confirm-validator.directive'
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/navbar/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './components/register/register.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductFormComponent } from './components/admin/product-form/product-form.component';
import { CustomFormsModule } from 'ng2-validation';





@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    ProductsComponent,
    SecondNavbarComponent,
    CartComponent,
    UserAccountComponent,
    ContactComponent,
    GuitarsComponent,
    ElectricGuitarsComponent,
    FooterComponent,
    NavbarComponent,
    PageNotFountComponent,
    ConfirmValidatorDirective,
    SearchComponent,
    ProductDetailsComponent,
    RegisterComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    
 
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    CustomFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
