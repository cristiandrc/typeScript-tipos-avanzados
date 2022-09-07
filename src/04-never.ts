//funcion que nunca termina
const withoutEnd = () => {
  while(true){
    console.log('nunca para de aprender')
  }
}

const fail = (message:string)=>{
  throw new Error(message)
}

const example = (input: unknown) =>{
  if(typeof input === 'string'){
    return 'it is a string'
  }else if(Array.isArray(input)){
    return 'it is an Array'
  }
  return fail('not match')
}

console.log(example('hi'))
console.log(example([1,2]))
console.log(example(3))
console.log(example('hi, after fail'))
