import { Product } from "src/app/product/product.model";

export interface Review {
    id: number;
    value: number;
    product: Product;
}