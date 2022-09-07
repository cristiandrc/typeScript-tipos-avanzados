let anyVar: any;
anyVar = 23
anyVar = 'asdf'
anyVar = []


let unknownVar: unknown;
unknownVar = true
unknownVar = 'asdfads'


//unknownVar.toUpperCase()//nos mostrara error

//tenemos que validar el tipo de dato para que nos permita usar la funcion
if(typeof unknownVar === 'string'){
  unknownVar.toUpperCase()
}


//tambien lo podemos retornar en funciones para verificar el tipo

const parse = (str:string):unknown => {
  return JSON.parse(str)
}
const obj = parse('{name:"David";')
//obj.map(console.log)//nos mostrara error

if(Array.isArray(obj)){
  obj.map(console.log)
}
