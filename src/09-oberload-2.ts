//David => ['D','a','v','i','d']  = string => string[]
//['D','a','v','i','d'] => David = string[] => string
//overload
export function parseStr(input:string):string[]
export function parseStr(input:string[]):string
export function parseStr(input:number):boolean

// export function parseStr(input: string | string[]):string | string[]{

//   if(Array.isArray(input)){
//     return input.join('')//string
//   }else{
//     return input.split('')//string[]
//   }
// }
//Refactor de la function
export function parseStr(input: unknown):unknown{
  if(Array.isArray(input)){
    return input.join('')//string
  }else if(typeof input === 'string'){
    return input.split('')//string[]
  }else if(typeof input === 'number'){
    return true
  }
}


const rtaArray = parseStr('David')
console.log('rtaArray',rtaArray)
rtaArray.reverse()

const rtaString = parseStr(['D','a','v','i','d'])
console.log('rtaString',rtaString)
rtaString.toLocaleLowerCase()


const rtaBoolean = parseStr(3)
console.log('rtaBoolean',rtaBoolean)
rtaBoolean

