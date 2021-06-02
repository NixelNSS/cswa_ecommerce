import { Subcategory } from "../category/subcategory.model";

export interface Product {
    id: number;
    name: string;
    description: string;
    imageURL: string;
    quantity: string;
    price: number;
    seller: string;
    countryOfOrigin: string;
    subcategory: Subcategory;
}