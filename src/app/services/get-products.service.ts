
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
  categoriesUrl
} from 'src/app/config/api';

@Injectable({
  providedIn: 'root',
})
export class GetProductsService {
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

  constructor(private http: HttpClient) {}

   getCategories(): Observable<Products[]> {
    return this.http.get<Products[]>(categoriesUrl);
  }

  getGuitars(): Observable<Products[]> {
    return this.http.get<Products[]>(guitarsUrl)
      .pipe(catchError(this.handleError<any>('getGuitars', [])));
  }

  getElectricGuitar(): Observable<Products[]> {
    return this.http.get<Products[]>(electricGuitarsUrl);
      
  }
  getCart(): Observable<Products[]> {
    return this.http.get<Products[]>(cartUrl);
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
