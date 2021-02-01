import { Products } from 'src/app/models/products.interface';
import { GetProductsService } from '../../services/get-products.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guitars',
  templateUrl: './guitars.component.html',
  styleUrls: ['./guitars.component.css'],
})
export class GuitarsComponent implements OnInit, OnDestroy {
  guitars!: any[]
  currentId!:number
  
  private subscription :Subscription = Subscription.EMPTY;
  constructor(private getProductsService: GetProductsService,
   private route: ActivatedRoute) {}

  ngOnInit(): void {
  this.getGuitars();
  }

  getGuitars(){
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;
    this.subscription =  this.getProductsService.getGuitars()
    .subscribe(guitars => this.guitars = guitars);
  }

  putGuitars(prods: Products) {
    this.subscription = this.getProductsService.postProds(prods).subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
