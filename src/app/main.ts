import {faker} from '@faker-js/faker'
import { addProduct,findProduct,products, updateProduct } from "./products/product.service";

for (let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    price: parseInt(faker.commerce.price(),10),
    stock: faker.datatype.number({min: 10, max: 100}),
    size: faker.helpers.arrayElement(['s','m','l','xl']),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElement(),
    categoryId: faker.datatype.uuid()
  })

}

console.log(products)
const product = products[0]
updateProduct(product.id,{
title: 'New title',
stock: 80,
price: 90
})


findProduct({
  stock: 10,
  color: 'blue'
})
