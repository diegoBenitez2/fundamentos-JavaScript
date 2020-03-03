var juan = {
  nombre: 'juan',
  apellido:'Gomez',
  edad: 27,
  peso: 75,
  cantidadLibros: 75

}

var luis = {
  nombre: 'luis',
  apellido:'Martinez',
  edad: 22,
  peso: 78,
  altura: 1.70,
  cantidadLibros: 67


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
  altura: 1.80,
  cantidadLibros: 100

}

var carlos = {
  nombre: 'Carlos',
  apellido:'Palacios',
  edad: 18,
  peso: 67,
  altura: 1.60,
  cantidadLibros: 80
}

const personas =[carlos, diego, luis]

for(var i = 0 ; i< personas.length; i++){
  var persona = personas[i]
  console.log(`${persona.nombre} tiene ${persona.edad} años `)

}
//retorna si y solo si se cumple la condicion
// const esAlta = persona => persona.altura > 1.7
const esAlta = ({altura}) => altura > 1.7


//filtra los items de un arrays que cumplen la funcion(condicional)
var personasALtas = personas.filter(esAlta)
console.log(personasALtas)

//filtrado de personas bajas
const esBaja =  ({altura}) => altura < 1.7
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

// }
//se crea un nuevo array actualizando la altura
var personasCms = personas.map(pasarACmts)
console.log(personasCms)

//OBTENER EL TOTAL DE LOS VALORES DE UN ITEM EN UN ARRAY
//OPCION 1
// var TotalLbros = 0
// for (var i = 0; i< personas.length; i++){
//   TotalLbros += personas[i].cantidadLibros
  
// }
//OPCION 2
const reducer = (acum, {cantidadLibros}) => 
  acum + cantidadLibros
// variable.reduce(funcion, inicial)
var TotalLbros = personas.reduce(reducer, 0)
console.log(`La cantidad de libros son:${TotalLbros} `)

//Agregar, eliminar, reemplazar valores en un array
var clasificaciones = ['Ana', 'Oswaldo', 'Raul','Celia', 'Maria', 'Antonio']
console.log(clasificaciones)
clasificaciones.splice(2,2,'Celia','Raul')
console.log(clasificaciones)
clasificaciones.splice(5,1)
console.log(clasificaciones)
clasificaciones.unshift('Marta')
console.log(clasificaciones)
clasificaciones.splice(1,0,'Roberto','Amaya')
console.log(clasificaciones)

//Crear copia de array, ordenar asce, ordenar desce
var numerosAleatorios  = []
for (var i = 0; i < 10; i++){
  numerosAleatorios[i] = Math.round(Math.random() * 10 )
}
console.log(`los numeros aleatorios son : ${numerosAleatorios}`)

var aleatorios2 = numerosAleatorios.slice();
console.log(`los numeros nuevos  aleatorios son : ${numerosAleatorios}`)

const numOrdenadosAsc = aleatorios2.sort((a,b) => a - b)
console.log(`los numeros ordenados Ascendentemente: ${numOrdenadosAsc}`)


const numOrdenadosDes = aleatorios2.sort((a,b)=> b - a)
console.log(`los numeros ordenados Descendentemente: ${numOrdenadosDes}`)


//metodo para devolver el valor y la posicion de un array
// METODO : entries()
// const vector=[10, 40, 60, 5];
//   for(let [indice, valor] of vector.entries())
//     document.write(`${valor} ocupa la posición ${indice}<br>`);

