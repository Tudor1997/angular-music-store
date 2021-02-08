import { Observable } from 'rxjs';
import { ShoppingCart } from './../../models/shopping-cart';
import { Component, OnInit } from '@angular/core';
import { AppUser } from 'src/app/models/app-user';
import { AuthService } from 'src/app/services/auth.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { AngularFireObject } from 'angularfire2/database';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appUser!:AppUser | null;
  cart$!: Observable<ShoppingCart>;
  constructor(private auth:AuthService,
    private shoppingCart: ShoppingCartService) { }

 async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
  
    this.cart$ = await this.shoppingCart.getCart();
  }
  logout(){
  this.auth.logout();
  }
}
