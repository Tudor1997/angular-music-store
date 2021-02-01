import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { electricGuitarsUrl, guitarsUrl } from 'src/app/config/api';
import { Products } from 'src/app/models/products.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
guitars!: Observable<Products[]>
electricGuitars!: Observable<Products[]>
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  doSearch(value:string){
    console.log(`value= ${value}`);
  if(`${value}`== 'guitars' || `${value}`== 'Guitars'){
    this.router.navigateByUrl('/guitars');
  }else if(`${value}` == 'electric guitars' || `${value}` == 'Electric guitars' 
  || `${value}` == 'Electric Guitars'){
    this.router.navigateByUrl('/electricGuitars')
  }else if(`${value}`== 'categories' || `${value}`== 'Categories'){
    this.router.navigateByUrl('/categories')
  }else if(`${value}`== 'register' || `${value}` == 'Register'){
    this.router.navigateByUrl('/register')
  }else if(`${value}`== 'cart' || `${value}` == 'Cart'){
    this.router.navigateByUrl('/cart')
  }else if(`${value}`== 'home' || `${value}` == 'Home'){
    this.router.navigateByUrl('/home')
  }else if(`${value}`!== 'home' ){
    this.router.navigateByUrl('/**')
  }
  }
}
