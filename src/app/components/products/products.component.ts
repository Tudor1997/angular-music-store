import { GetProductsService } from '../../services/get-products.service';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products?: any[];
 
  constructor(
    // db: AngularFireDatabase,
    private getProductsService : GetProductsService
    ) {
      
      // db.list('/products').valueChanges().subscribe(products => this.products = products);
      // console.log(this.products);
      
     
     }

  ngOnInit(): void {
  this.getProductsService.getProducts().subscribe( products => this.products = products);

  }

}
