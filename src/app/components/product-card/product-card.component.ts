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


  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  addToCart(product: Product){
    this.shoppingCartService.addToCart(product);


}

}
