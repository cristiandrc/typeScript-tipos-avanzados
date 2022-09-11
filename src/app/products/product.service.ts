import {faker} from '@faker-js/faker'

import { Product } from "./product.model"
import { CreateProductDto,FindProductDto,UpdateProductDto } from "./product.dto"

export const products: Product[] = []

export const addProduct = (data:CreateProductDto):Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id:data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }
  }
  products.push(newProduct)
  return newProduct
}


export const updateProduct = (id:Product['id'] , changes: UpdateProductDto):Product => {
  const index = products.findIndex(e => e.id === id)
  products[index] = {...products[index], ...changes}
  return products[index]
}

export const findProduct = (dto:FindProductDto):Product[] => {
  // const filterProducts = products.filter(e => )

  return products
}

export const deleteProduct = (id:string)=> {

}


