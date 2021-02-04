import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';





@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 categories$;
 
  constructor(private categoriesService: CategoryService) {
    this.categories$ = this.categoriesService.getCategories().valueChanges();
  }

  ngOnInit(): void {
  
  }


 
}
