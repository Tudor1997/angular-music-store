import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }
  @ViewChild('container') container?: ElementRef;
  ngOnInit(): void {
  }
 getHeight(){
 
   if(this.container){
  // console.log(this.container.nativeElement.innerHTML.length);  
  if(this.container.nativeElement.innerHTML.length === 420 ){
    this.container.nativeElement.classList.add('full');
  }else if( this.container.nativeElement.innerHTML.length <= 2500){
    this.container.nativeElement.classList.add('full');
  }else{
    this.container.nativeElement.classList.remove('full');
  }
   }
  
 }
}
