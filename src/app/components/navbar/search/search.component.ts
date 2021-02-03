
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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
  
}
