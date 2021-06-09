import { ShoppingCartProduct } from './shopping-cart-product.model';
import { Product } from "../product/product.model";

export interface ShoppingCart {
    id: number;
    amount: number;
    count: number;
    productCountList: ShoppingCartProduct[];
}