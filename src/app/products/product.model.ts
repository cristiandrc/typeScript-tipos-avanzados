import { BaseModel } from "../base.model";
import { Category } from "../categories/category.model";

export type Sizes = 's' | 'm' | 'l' | 'xl'

export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  color: string
  stock: number;
  price: number
  category: Category;
  isNew: boolean;
  tags: string[];
  size?: Sizes;
}
