import { Product } from "./products.interface";

export class ShoppingCartItem{
   
    constructor(public product: Product, public quantity: number){}
   
    get totalPrice(){ return this.product.price * this.quantity;} 
}