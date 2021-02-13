import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/products.interface';
import { ProductService } from 'src/app/services/product.service';
import { switchMap } from 'rxjs/operators';

import { Subscription } from 'rxjs';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit , OnDestroy{
  products: Product[] = [];
  filteredProducts: Product[] = [];
  cart: any;
  category!:string | null;
  subscription!:Subscription
  constructor(productService: ProductService, 
    route:ActivatedRoute,
 ) { 
    
   

      productService.getAll().valueChanges().pipe(
        switchMap(products =>{
          this.products = products;
          return route.queryParamMap;
        })
      ).subscribe(params =>{
        this.category = params.get('category');

        this.filteredProducts = (this.category) ?
        this.products.filter(p => p.category === this.category) :
        this.products;
      });
  }

  async ngOnInit(): Promise<any> {
  
       
}
ngOnDestroy(): void {
  this.subscription.unsubscribe();
}

}
