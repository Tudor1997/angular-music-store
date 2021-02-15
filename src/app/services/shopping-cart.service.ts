import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Product } from '../models/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor(private db: AngularFireDatabase) {}

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime(),
    });
  }

  async getCart() {
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId);
  }

  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key!);
    return result.key!;
  }

  async addToCart(product: Product) {
    this.updateItemQuantity(product, 1);
  }

  async removeFromCart(product: Product) {
    this.updateItemQuantity(product, -1);
  }

  private async updateItemQuantity(product: Product, change: number) {
    let cartId = await this.getOrCreateCartId();
    let item$: Observable<any> = this.db
      .object('/shopping-carts/' + cartId + '/items/' + product.key)
      .valueChanges();
    let item$$ = this.db.object(
      '/shopping-carts/' + cartId + '/items/' + product.key
    );
    item$.pipe(take(1)).subscribe((item) => {
      if (item === null) {
        item$$.set({ product: product, quantity: 1 });
        console.log('adding new product to cart');
      } else {
        item$$.update({ quantity: (item.quantity || 0) + change });
        console.log('updating existing product ');
      }
    });
  }
}
