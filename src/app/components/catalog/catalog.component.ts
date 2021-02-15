import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/products.interface';
import { ProductService } from 'src/app/services/product.service';
import { switchMap } from 'rxjs/operators';

import { Subscription } from 'rxjs';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  cart: any;
  category!: string | null;
  subscription!: Subscription;
  constructor(productService: ProductService, 
    route: ActivatedRoute,
   private shoppingCartService: ShoppingCartService) {
    
    this.subscription = productService
      .getAll()
      .pipe(
        switchMap((products:any) => {
          this.products = products;
          return route.queryParamMap;
        })
      )
      .subscribe((params) => {
        this.category = params.get('category');

        this.filteredProducts = this.category
          ? this.products.filter((p) => p.category === this.category)
          : this.products;
      });
  }

  async ngOnInit() {
   this.subscription = (await this.shoppingCartService.getCart())
   .subscribe(cart => this.cart = cart);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
