import { Category } from "src/app/category/category.model";

export interface User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    favoriteCategories: Category[];
}