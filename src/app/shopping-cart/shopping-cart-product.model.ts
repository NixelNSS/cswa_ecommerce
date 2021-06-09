import { Product } from "../product/product.model";

export interface ShoppingCartProduct {
    product: Product[];
    count: number[];
}