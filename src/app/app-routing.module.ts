import { PageNotFountComponent } from './components/page-not-fount/page-not-fount.component';
import { ElectricGuitarsComponent } from './components/electric-guitars/electric-guitars.component';
import { GuitarsComponent } from './components/guitars/guitars.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { config } from 'rxjs';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainContentComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'cart', component: CartComponent},
  { path: 'user', component: UserAccountComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'guitars', component: GuitarsComponent},
  { path: 'electricGuitars', component: ElectricGuitarsComponent},
  { path: 'products/guitars', component: GuitarsComponent},
  { path: 'products/electricGuitars', component: ElectricGuitarsComponent},
  {path: '**', component: PageNotFountComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
