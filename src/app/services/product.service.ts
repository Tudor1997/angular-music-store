import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from '../models/products.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db:AngularFireDatabase) { }

  create(product){
  return this.db.list('/products').push(product);
  }

  getAll(){
    return this.db.list('/products').snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(product => ({ key: product.key, ...product.payload.val()  as Product}))
        )
      );
  }
  getProduct(productId){
  return this.db.object('/products/' + productId);
  }
  update(productId, product){
    return this.db.object('/products/' + productId).update(product);
  }
  delete(productId){
  this.db.object('/products/' + productId).remove();
  }
}
