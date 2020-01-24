var juan = {
  nombre: 'juan',
  apellido:'Gomez',
  edad: 27,
  peso: 75,
}

var luis = {
  nombre: 'luis',
  apellido:'Martinez',
  edad: 22,
  peso: 78,
  altura: 1.70

}

var diego = {
  nombre: 'diego',
  apellido: 'benitez',
  edad: 27,
  ingeniero:true,
  cantante: true,
  dj: false,
  guitarrista: true,
  drone:false,
  altura: 1.80
}

var carlos = {
  nombre: 'Carlos',
  apellido:'Palacios',
  edad: 18,
  peso: 67,
  altura: 1.60
}

const personas =[carlos, diego, luis]

for(var i = 0 ; i< personas.length; i++){
  var persona = personas[i]
  console.log(`${persona.nombre} tiene ${persona.edad} años `)

}
//retorna si y solo si se cumple la condicion
// const esAlta = persona => persona.altura > 1.7
const esAlta = ({altura}) => altura > 1.7


//filtra arrays con una funcion devuelve un array nuevo
var personasALtas = personas.filter(esAlta)
console.log(personasALtas)

//filtrado de personas bajas
const esBaja =  ({altura}) => altura <1.7
const personasBajas = personas.filter(esBaja)
console.log(personasBajas)

//funcion Map
//se utiliza para transformar los atributos devolviendo un nuevo array
const pasarACmts = ({altura})=> 
//segunda opcion 
({
  ...personas,
  altura: altura * 100
})


//primera opcion
//  { return {
// ...personas,
//   altura: altura * 100
// }

}
//se crea un nuevo array actualizando la altura
var personasCms = personas.map(pasarACmts)
console.log(personasCms)