import { Subcategory } from "../category/subcategory.model";
import { Country } from "../shared/country/country.model";

export interface Product {
    id: number;
    name: string;
    description: string;
    imageURL: string;
    price: number;
    seller: string;
    countryOfOrigin: Country;
    subcategory: Subcategory;
}