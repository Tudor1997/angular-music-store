import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-electric-guitars',
  templateUrl: './electric-guitars.component.html',
  styleUrls: ['./electric-guitars.component.css'],
})
export class ElectricGuitarsComponent implements OnInit, OnDestroy {
 
  
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
