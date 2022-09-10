import { addProduct } from "./products/product.service";

addProduct({
  id:'1',
  title: 'p1',
  createAt: new Date(),
  updateAt: new Date(),
  stock: 23,
  size:'s',
  category:{
    id:23,
    name: 'shirt',
    createAt: new Date(),
    updateAt: new Date()

  }
})
