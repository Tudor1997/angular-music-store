import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/products.interface';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories$;
  category!:string | null;
  constructor(productService: ProductService, 
    categoryService: CategoryService,
    route:ActivatedRoute) { 
    
      productService.getAll().pipe(
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

    this.categories$ = categoryService.getAll().valueChanges();

   
  }

  ngOnInit(): void {
  }

}
