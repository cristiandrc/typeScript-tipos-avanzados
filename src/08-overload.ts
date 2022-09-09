//David => ['D','a','v','i','d']  = string => string[]
//['D','a','v','i','d'] => David = string[] => string

function parseStr(input: string | string[]):string | string[]{

  if(Array.isArray(input)){
    return input.join('')//string
  }else{
    return input.split('')//string[]
  }
}

const rtaArray = parseStr('David')
console.log('rtaArray',rtaArray)
//.reverse() //error
if(Array.isArray(rtaArray)){
rtaArray.reverse()
}

const rtaString = parseStr(['D','a','v','i','d'])
console.log('rtaString',rtaString)
//rtaString.toLocaleLowerCase() //error
if(typeof rtaString === 'string' ){
  rtaString.toLocaleLowerCase()
}
