import { Products } from '../models/products.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {
  cartUrl,
  electricGuitarsUrl,
  guitarsUrl,
  productsPurchasedUrl,
  productsUrl,
} from 'src/app/config/api';

@Injectable({
  providedIn: 'root',
})
export class GetProductsService {
  
 
  private readonly apiUrl: string;
  private readonly guitarsUrl: string;
  private readonly electricGuitarUrl: string;
  private readonly cart: string;
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  log(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {
    this.apiUrl = productsUrl;
    this.guitarsUrl = guitarsUrl;
    this.electricGuitarUrl = electricGuitarsUrl;
    this.cart = cartUrl;
  }
     
  getGuitars(): Observable<Products[]> {
    let guitars = this.guitarsUrl;
    return this.http
      .get<Products[]>(guitars)
      .pipe(catchError(this.handleError<any>('getGuitars', [])));
  }

  getProducts(): Observable<Products[]> {
    const url = this.apiUrl;
    console.log(url);
    return this.http.get<Products[]>(url);
  }

  getElectricGuitar(): Observable<Products[]> {
    const electricGuitar = this.electricGuitarUrl;
    return this.http.get<Products[]>(electricGuitar);
  }
  getCart(): Observable<Products[]> {
    const cart = this.cart;
    return this.http.get<Products[]>(cart);
  }
  postProds(prods: Products ): Observable<Products[]> {
    return this.http.post<Products[]>(cartUrl, prods);
  }
  postPurchasedProducts(prods: Products ): Observable<Products[]> {
    return this.http.post<Products[]>(productsPurchasedUrl, prods);
  }
  getPurchasedProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(productsPurchasedUrl);
  }
}
