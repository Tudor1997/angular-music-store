
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('searchInput') searchInput?: ElementRef;
  @ViewChild('searchButton') searchButton?: ElementRef;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  searchByNav(){
if(this.searchInput){
  if(this.searchInput.nativeElement.value === "home" 
  || this.searchInput.nativeElement.value === "Home"){
    this.router.navigateByUrl('/home');
  }else if(this.searchInput.nativeElement.value === "catalog" 
  || this.searchInput.nativeElement.value === "Catalog"){
    this.router.navigateByUrl('/catalog');
  }else if(this.searchInput.nativeElement.value === "contact" 
  || this.searchInput.nativeElement.value === "Contact"){
    this.router.navigateByUrl('/contact');
  }else if(this.searchInput.nativeElement.value === "shopping cart" 
  || this.searchInput.nativeElement.value === "Shopping cart"
  || this.searchInput.nativeElement.value === "cart"
  || this.searchInput.nativeElement.value === "Cart"){
    this.router.navigateByUrl('/cart');
  }
}
  }
}
