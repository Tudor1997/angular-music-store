import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnDestroy {
  categories$;
  product:any = {};
  id;
  subscribe!:Subscription;
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private categoryService:CategoryService,
   private productService: ProductService) { 
    this.categories$ = categoryService.getCategories().valueChanges();
  
   this.id = this.route.snapshot.paramMap.get('id');
   if (this.id) this.productService.getProduct(this.id).valueChanges().pipe(take(1))
.subscribe(p => this.product = p);
   }

  ngOnInit(): void {
  }
  save(product){
    if(this.id) this.productService.update(this.id, product);
    else this.productService.create(product);

    this.router.navigate(['/admin/products']);
  }
  delete(){
    if(!confirm('Are you sure you want to delete this product?')) return;
     
      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);
    
  }
  ngOnDestroy(){

  }
}
