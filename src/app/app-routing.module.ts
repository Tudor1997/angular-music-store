import { AdminAuthGuardService } from './admin/services/admin-auth-guard.service';
import { OrderSuccessComponent } from './shopping/components/order-success/order-success.component';
import { RegisterComponent } from './core/components/register/register.component';
import { PageNotFountComponent } from './core/components/page-not-fount/page-not-fount.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './shopping/components/cart/cart.component';
import { ContactComponent } from './core/components/contact/contact.component';
import { MainContentComponent } from './core/components/main-content/main-content.component';



import { CheckOutComponent } from './shopping/components/check-out/check-out.component';
import { LoginComponent } from './core/components/login/login.component';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/components/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './shopping/components/my-orders/my-orders.component';
import { AuthGuardService } from 'shared/services/auth-guard.service';
import { ProductFormComponent } from './admin/components/product-form/product-form.component';
import { CatalogComponent } from './shopping/components/catalog/catalog.component';







const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainContentComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'cart', component: CartComponent},
  { path: 'catalog', component: CatalogComponent},

  { path: 'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent},


  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
  { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuardService]},
  { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuardService]},



  { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
  { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
  { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService,AdminAuthGuardService]},



  { path: '**', component: PageNotFountComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
