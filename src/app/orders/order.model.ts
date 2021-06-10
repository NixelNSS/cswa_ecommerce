import { Product } from "../product/product.model";
import { Review } from "../shared/review/review.model";

export interface Order {
    id: number;
    amount: number;
    address: string;
    state: string;
    dateCreated: Date;
    products: Product[];
    reviews: Review[];
}