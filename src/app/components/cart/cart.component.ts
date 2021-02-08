import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { ShoppingCart } from 'src/app/models/shopping-cart';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }
  @ViewChild('container') container?: ElementRef;

  cart$!: Observable<ShoppingCart>;
  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  }




//  getHeight(){
 
//    if(this.container){
//   // console.log(this.container.nativeElement.innerHTML.length);  
//   if(this.container.nativeElement.innerHTML.length === 420 ){
//     this.container.nativeElement.classList.add('full');
//   }else if( this.container.nativeElement.innerHTML.length <= 2500){
//     this.container.nativeElement.classList.add('full');
//   }else{
//     this.container.nativeElement.classList.remove('full');
//   }
//    }
  
//  }
}
