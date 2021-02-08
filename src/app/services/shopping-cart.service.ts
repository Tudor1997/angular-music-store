import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Product } from '../models/products.interface';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db:AngularFireDatabase) { }

 private create(){
  return  this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }
  
  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCartId();
    return this.db
        .object('/shopping-carts/' + cartId)
        .valueChanges()
        .pipe(map((x)=> (x) ? new ShoppingCart(( x as any).items): (x as any)
  ));
}
  private getItem(cartId:string, productId:string){
  return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async getOrCreateCartId(): Promise<string>{
    let cartId = localStorage.getItem('cartId');
    if(cartId) return cartId;
    
    let result = await this.create();
    localStorage.setItem('cartId', result.key!);
    return result.key!;
  }
  async addToCart(product: Product) {
 this.updateItem(product, 1);
}
  async removeFromCart(product:Product){
  this.updateItem(product, -1);
}
private async updateItem(product:Product, change:number){
  let cartId = await this.getOrCreateCartId();
  let item$ = this.getItem(cartId, product.key);
  item$.snapshotChanges().pipe(take(1)).subscribe((item) => {
      if (item.payload.exists()) {
          item$.update({
            title: product.title,
            imageUrl: product.imageUrl,
            price: product.price,
            quantity: item.payload.exportVal().quantity + change });
      } else {
          item$.set({ product: product, quantity: 1 });
      }
  });
}
}