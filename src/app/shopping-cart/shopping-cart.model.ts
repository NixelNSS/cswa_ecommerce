import { Product } from "../product/product.model";

export interface ShoppingCart {
    id: number;
    amount: number;
    count: number;
    products: Product[];
}