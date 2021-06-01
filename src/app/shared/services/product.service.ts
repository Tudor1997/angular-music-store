import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Product } from 'shared/models/products.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  itemRef: any;

  constructor(private db:AngularFireDatabase) { }

  create(product){
  return this.db.list('/products').push(product);
  }

  getAll() { 
    this.itemRef =  this.db. list('/products').snapshotChanges().pipe(map(changes => {
      return changes.map(c => ({  ...c.payload.val() as Product, key: c.payload.key }));
    }));
    return this.itemRef;
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
