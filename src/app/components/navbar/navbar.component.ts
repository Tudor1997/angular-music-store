import { ShoppingCart } from './../../models/shopping-cart';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Observable } from 'rxjs';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppUser } from 'src/app/models/app-user';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appUser!:AppUser | null;
  cart$!:Observable<ShoppingCart | any>

  check:boolean = false;
  constructor(private auth:AuthService,
  private shoppingCartService:ShoppingCartService ) { }

 async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
   this.cart$ = (await this.shoppingCartService.getCart())
  }
  logout(){
  this.auth.logout();
  }

    

   
  
}
