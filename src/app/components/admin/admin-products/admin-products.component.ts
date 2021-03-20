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
  setHeight() {
    if (this.container) {
      if (this.container.nativeElement.innerHTML.length > 420) {
        this.container.nativeElement.classList.add('full');
      }
    }
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
