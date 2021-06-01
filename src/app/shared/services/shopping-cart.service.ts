import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Product } from 'shared/models/products.interface';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor(private db: AngularFireDatabase) {}

  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId).snapshotChanges()
    .pipe(map(x => new ShoppingCart(x.payload.exportVal().items)));
  
  }
  async addToCart(product: Product) {
    this.updateItemQuantity(product, 1);
  }

  async removeFromCart(product: Product) {
    this.updateItemQuantity(product, -1);
  }
 
async clearCart(){
  let cartId =  await this.getOrCreateCartId();
  this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }
  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key!);
    return result.key!;
  }

 

  private async updateItemQuantity(product: Product, change: number) {
    let cartId = await this.getOrCreateCartId();
    let item$: Observable<any> = this.db
      .object('/shopping-carts/' + cartId + '/items/' + product.key)
      .valueChanges();
    let item$$ = this.db.object('/shopping-carts/' + cartId + '/items/' + product.key);
    item$.pipe(take(1)).subscribe((item:any) => {
      if (item === null) {
        item$$.set({ product: product, quantity: 1 });
      } else {
        item$$.update({ quantity: (item.quantity || 0) + change });
        let quantity = (item.quantity || 0) + change;
        if(quantity === 0) item$$.remove();
      }
    
    
    });
  }
}
