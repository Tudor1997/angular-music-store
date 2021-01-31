import { Products } from 'src/app/models/products.interface';
import { GetProductsService } from '../../services/get-products.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-guitars',
  templateUrl: './guitars.component.html',
  styleUrls: ['./guitars.component.css'],
})
export class GuitarsComponent implements OnInit, OnDestroy {
  guitars!: any[]
  productList!: Products[];
  
  private subscription :Subscription = Subscription.EMPTY;
  constructor(private getProductsService: GetProductsService) {}

  ngOnInit(): void {
  this.subscription =  this.getProductsService.getGuitars()
      .subscribe((guitars) => (this.guitars = guitars));
  }
  putGuitars(prods: Products) {
    this.subscription =   this.getProductsService.postProds(prods).subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
