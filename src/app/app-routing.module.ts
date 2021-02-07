import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFountComponent } from './components/page-not-fount/page-not-fount.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainContentComponent } from './components/main-content/main-content.component';



import { CheckOutComponent } from './components/check-out/check-out.component';
import { LoginComponent } from './components/login/login.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ProductFormComponent } from './components/admin/product-form/product-form.component';
import { CatalogComponent } from './components/catalog/catalog.component';






const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainContentComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'cart', component: CartComponent},
  { path: 'catalog', component: CatalogComponent},
 
  { path: 'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent},


  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService]},
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
