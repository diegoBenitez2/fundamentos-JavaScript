//OBJETOS EN JAVASCRIPT

//Objeto que tiene clave y valor
//Clave(Key): numeros, string
//Valor: numericos, string 
var diego = {
  nombre:'diego',
  apellido:'Benitez',
  edad: 28
}
//se desestructura el objeto con {} asignando el valor del atributo
function imprimirMayusculas({ nombre }){
  //la variable definida como parametro  'nombre' existe en alcance local(de la funcion)
 nombre = nombre.toUpperCase()
  console.log(nombre)
}
//modifico el valor de ese atributo del objeto
imprimirMayusculas({nombre :'dario'})

// //OTRA MANERA
// //ENVIANDO TODO EL OBJETO
function imprimirMayuscula(persona){
//  var  nombre = persona.nombre.toUpperCase()
//   console.log(nombre)
//  ESTE ES UNA FORMA MAS CORTA
 var { nombre } = persona
//  IMPRIME ASI:
 console.log(nombre.toUpperCase())

}
imprimirMayuscula(diego)

//DESESTRUCTURA EL OBJETO ENVIANDO SOLO EL ATRIBUTO

function imprimirMayusculass(nombre){
   nombre = nombre.toUpperCase()
  console.log(nombre)
}
imprimirMayusculass(diego.nombre)

//ENVIAR PARAMETROS DE OBJETOS COMO REFERENCIA
//le pasamos el OBJETO en la funcion
// function cumpleanos(persona){
// persona.edad += 1
// }
//le pasamos un ATRIBUTO del objeto  en la funcion
function cumpleanos(edad){
  edad +=1
  console.log(edad)
}
//crearmos un nuevo objeto copiando la referencia del objeto
function cumpleanos(persona){
  return{
    ...persona,
    edad: persona.edad +  1,
  }
}
var diegoMasViejo = cumpleanos(diego)
console.log(diegoMasViejo)

