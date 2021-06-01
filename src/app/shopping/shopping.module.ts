import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'app/app-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CheckOutComponent,
    CartComponent,
    CatalogComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
  ],
  imports: [
    SharedModule
  ]
})
export class ShoppingModule { }
