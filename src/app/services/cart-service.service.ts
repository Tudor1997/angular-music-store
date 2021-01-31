import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { cartUrl } from '../config/api';
import { Products } from '../models/products.interface';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
product!: Observable<Products[]>
  constructor(private http: HttpClient) { }
  getCartItems(): Observable<Products[]>{
return this.http.get<Products[]>(cartUrl);
  }
  delete(product: Products | number):Observable<Products>{
    const id = typeof product === 'number' ? product : product.id;
    const url = `${cartUrl}/${id}`;
    console.log(url);
    return this.http.delete<Products>(url);
   }
   
}
