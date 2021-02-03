import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class GetProductsService {
  constructor(private http: HttpClient) {}

   getCategories() {}

  getGuitars(){}

  getElectricGuitar(){}
  getCart(){}
 
}
