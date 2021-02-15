import { Product } from "./products.interface";

export interface ShoppingCartItem{
    product: Product;
    quantity: number;
}