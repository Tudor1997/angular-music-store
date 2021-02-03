import { GetProductsService } from '../../services/get-products.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-guitars',
  templateUrl: './guitars.component.html',
  styleUrls: ['./guitars.component.css'],
})
export class GuitarsComponent implements OnInit, OnDestroy {

  
  private subscription! :Subscription; 
  constructor(private getProductsService: GetProductsService) {}

  ngOnInit(): void {
  }
  getGuitars(){ }
  ngOnDestroy(): void {
   
  }
}
