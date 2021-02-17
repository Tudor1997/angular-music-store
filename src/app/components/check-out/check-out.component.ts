import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShoppingCart } from 'src/app/models/shopping-cart';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {
  
  cart!: ShoppingCart;
  cartSubscription!: Subscription;
  userSubscription!: Subscription;
  userId!:string | undefined;
  constructor(private authService: AuthService,
    private shoppingCartService: ShoppingCartService,
    private orderService: OrderService,
    private router:Router) { }

  async ngOnInit(): Promise<void> {
  let cart$ = await this.shoppingCartService.getCart()
 this.cartSubscription = cart$.subscribe(cart => this.cart = cart)
 this.userSubscription = this.authService.user$.subscribe(user => this.userId = user?.uid);
  }
 async placeOrder(shipping){
    
    let order = {
      datePlaced: new Date().getTime(),
      shipping: shipping,
      userId: this.userId,
      items: this.cart.itemsMap
    };

    let result = await this.orderService.storeOrder(order)
    this.router.navigate(['/order-success', result.key]);
  }
  onlyNumbersAllowed(event):boolean{
    const charCode = (event.which) ? event.which : event.keyCode;
    if(charCode > 31 && (charCode < 48 || charCode > 57)){
     console.log('charCode restricted is' + charCode);
      return false;
    }
    return true;
  }
  ngOnDestroy(){
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}
