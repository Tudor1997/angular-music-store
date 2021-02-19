import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  constructor(private db:AngularFireDatabase,
    private shoppingCartService:ShoppingCartService) { }

  storeOrder(order){
  let orderResult = this.db.list('/orders').push(order);
  this.shoppingCartService.clearCart()
  return orderResult;
  }
  getOrders(){
    return this.db.list('/orders');
  }
  getOrdersByUser(userId: string) {
    console.log(userId);
    return this.db.list('/orders', ref =>
    ref.orderByChild('userId').equalTo(userId)).valueChanges();
    
  }

}
