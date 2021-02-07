import { Product } from './../../../models/products.interface';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products!: Product[];
  filteredProducts!: any[];
  subscribe!: Subscription;
  @ViewChild('container') container?: ElementRef;
  constructor(private productService: ProductService) {
    this.subscribe = this.productService
      .getAll()
      .subscribe(
        (products) => (this.filteredProducts = this.products = products)
      );
  }
  filter(query: string) {
    if (query) {
      this.filteredProducts = this.products.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  setHeight() {
    if (this.container) {
      console.log(this.container.nativeElement.innerHTML.length);
      if (this.container.nativeElement.innerHTML.length > 420 && this.container.nativeElement.innerHTML.length < 2179) {
        this.container.nativeElement.classList.add('full');
        this.container.nativeElement.classList.remove('medium');
      }else if(this.container.nativeElement.innerHTML.length === 2179){
        this.container.nativeElement.classList.add('half-medium');
        this.container.nativeElement.classList.remove('full');
        this.container.nativeElement.classList.remove('medium');
      } else if(this.container.nativeElement.innerHTML.length > 2179 || this.container.nativeElement.innerHTML.length === 4000){
        this.container.nativeElement.classList.remove('full');
        this.container.nativeElement.classList.add('medium');
   
      }  else {
        this.container.nativeElement.classList.remove('full');
        this.container.nativeElement.classList.remove('medium');
      }
    }
  }
}
