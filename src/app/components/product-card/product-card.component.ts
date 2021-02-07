import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products.interface';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
@Input('product') product!:Product;
@Input('show-actions') showActions = true;
@Input('shopping-cart') shoppingCart;
  constructor(private cartService: ShoppingCartService) { }

  ngOnInit(): void {
  }
addToCart(product: Product){
this.cartService.addToCart(product);
}
getQuantity(){
  if(!this.shoppingCart || null === this.shoppingCart.key) return 0;
 let item = this.shoppingCart.items[this.product.key];
 return item ? item.quantity : 0;
}
}
