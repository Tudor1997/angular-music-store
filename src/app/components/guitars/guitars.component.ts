import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-guitars',
  templateUrl: './guitars.component.html',
  styleUrls: ['./guitars.component.css'],
})
export class GuitarsComponent implements OnInit, OnDestroy {

  guitars$;
  private subscription! :Subscription; 
  constructor(private categoryService: CategoryService) {
    this.guitars$ = this.categoryService.getGuitars().valueChanges()
  }

  ngOnInit(): void {
  }
 
  ngOnDestroy(): void {
   
  }
}
