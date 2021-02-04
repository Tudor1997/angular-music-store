import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import {} from 'angularfire2/database';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  constructor(categoryService:CategoryService,
   private productService: ProductService) { 
    this.categories$ = categoryService.getCategories().valueChanges();
  
  }

  ngOnInit(): void {
  }
  save(product){
    this.productService.create(product);
  }
}
