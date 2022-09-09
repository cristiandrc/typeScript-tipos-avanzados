export const createProduct = (
  id: string | number,
  isNew: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew
  }
}


const p1 = createProduct(1,true,23)
console.log(p1)

const p2 = createProduct(1,false)
console.log(p2)
