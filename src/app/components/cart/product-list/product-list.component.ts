import { HttpClient } from '@angular/common/http';
import { CartServiceService } from '../../../services/cart-service.service';
import { Products } from '../../../models/products.interface';
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { cartUrl } from 'src/app/config/api';
import { Router } from '@angular/router';
import { GetProductsService } from 'src/app/services/get-products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  productList!: Products[];
  @Input() total = 0;
 
  constructor(
    private CartService: CartServiceService,
    public productService: GetProductsService,
    private http: HttpClient,
    private router: Router
  ) {}
   
  ngOnInit(): void {
    this.CartService.getCartItems().subscribe((product) => {
      this.productList = product;
      product.map((result) => {
        result.totalPrice = result.value * result.qty; // calc total prize of one product/qty
        this.total = this.total + result.totalPrice; //calc prize of all products
        
      });
    });
  }
  delete(product: Products): void {
    this.CartService.delete(product.id).subscribe(() => {
      console.log(`Product with Id = ${product.id} deleted`);
      (err) => console.log(err);
      window.location.reload();
    });
  }

  updateProduct(product: Products): any {
    this.http
      .put<Products[]>(`${cartUrl}/${product.id}`, product)
      .subscribe(() => {
        this.productList.map((res) => {
          let totalPrice = res.totalPrice;
          totalPrice = res.qty * res.value; // calc total prize of one product/qty
          window.location.reload();
          return totalPrice;
        });
      });
  }
  postProds(prods: Products) {
    return this.productService.postPurchasedProducts(prods).subscribe();
  }
 
  ngOnDestroy(): void {}
}
