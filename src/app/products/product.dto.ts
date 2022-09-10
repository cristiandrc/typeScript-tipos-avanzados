// export type CreateProductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category' >;
import { Product } from "./product.model"

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category' >{
  categoryId: string
}

