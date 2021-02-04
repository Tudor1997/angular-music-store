import { Component, OnDestroy, OnInit } from '@angular/core';
import { Products } from '../../models/products.interface';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-electric-guitars',
  templateUrl: './electric-guitars.component.html',
  styleUrls: ['./electric-guitars.component.css'],
})
export class ElectricGuitarsComponent implements OnInit, OnDestroy {
  electricGuitars!:Products[]
  
  private subscription! :Subscription;
  
  constructor() {
  }

  ngOnInit(): void {
   
  }
  
  getElectricGuitars(){
   
  }

  putElectricGuitars() {
   
  }
  ngOnDestroy(): void {
   
  }
}
