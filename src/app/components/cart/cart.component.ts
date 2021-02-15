import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'src/app/models/shopping-cart';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart$!: Observable<ShoppingCart>;
  constructor(private shoppingCartService: ShoppingCartService) { }
  @ViewChild('container') container?: ElementRef;
  
 
  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart()
  }
  clearCart() {
    this.shoppingCartService.clearCart();
  }



  getHeight(){
 
   if(this.container){
  console.log(this.container.nativeElement.innerHTML.length);  
if(this.container.nativeElement.innerHTML.length === 420 ){
 this.container.nativeElement.classList.add('full');
  }else if( this.container.nativeElement.innerHTML.length <= 2500){
    this.container.nativeElement.classList.add('full');
  }else{
    this.container.nativeElement.classList.remove('full');
  }
   }
  
 }
}
