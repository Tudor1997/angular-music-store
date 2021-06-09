import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { Subscription } from 'rxjs';

import { Product } from 'shared/models/products.interface';
import { ProductService } from 'shared/services/product.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  isLoading: boolean = false;
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
   .subscribe(cart =>{
     this.cart = cart;
     this.isLoading = true;
    });
    this.isLoading = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
