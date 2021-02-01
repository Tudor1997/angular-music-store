import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetProductsService } from '../../services/get-products.service';
import { Products } from '../../models/products.interface';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-electric-guitars',
  templateUrl: './electric-guitars.component.html',
  styleUrls: ['./electric-guitars.component.css'],
})
export class ElectricGuitarsComponent implements OnInit, OnDestroy {
  electricGuitars!:Products[]
  
  private subscription :Subscription = Subscription.EMPTY; 
  
  constructor(private getProductsService: GetProductsService) {
  }

  ngOnInit(): void {
   this.getElectricGuitars();
  }
  
  getElectricGuitars(){
    this.subscription = this.getProductsService
    .getElectricGuitar()
    .subscribe((electricGuitars) => (this.electricGuitars = electricGuitars));
  }

  putElectricGuitars(prods: Products) {
    this.subscription =  this.getProductsService.postProds(prods).subscribe(() => {
      console.log(prods);
      prods.totalPrice = prods.qty * prods.value;
     
      
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
