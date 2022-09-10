import {faker} from '@faker-js/faker'
import { addProduct,products } from "./products/product.service";

for (let index = 0; index < 50; index++) {
  addProduct({
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    price: parseInt(faker.commerce.price(),10),
    createAt: faker.date.recent(),
    updateAt: faker.date.recent(),
    stock: faker.datatype.number({min: 10, max: 100}),
    size: faker.helpers.arrayElement(['s','m','l','xl']),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElement(),
    category:{
      id:faker.datatype.uuid(),
      name: faker.commerce.department(),
      createAt: faker.date.recent(),
      updateAt: faker.date.recent()
    }
  })

}

console.log(products)

