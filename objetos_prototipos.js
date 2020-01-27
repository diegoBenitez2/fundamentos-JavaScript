//las clases son prototipos mas que clases

//HERENCIA PROTOTIPAL
function hereda(prototipoPadre, prototipoHijo){
//   //funcion vacia
  var fn = function(){}
//   //pasamos elprototipo padre
  fn.prototype = prototipoPadre.prototype
//   //creamos un objeto de fn en prototipo hijo
  prototipoHijo.prototype = new fn
//   //Invocamos constructor del hijo
  prototipoHijo.prototype.constructor = prototipoHijo
}
// esta funcion es un constructor que crea el prototipo
function Personas (nombre,apellido,altura){
//   //THIS  crea atributos referenciando del prototipo para guardarlos en memoria
//   //y utilizarlos posteriormente
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}
//PROTOTYPE  permite crear acciones de referenciando los protitipos
//Es importante crear todas las acciones(funciones) juntas y agrupadas
//antes de ser utilizadas para que no hayan errores de ejecucion
// La funcion es una funcion anonima
Personas.prototype.saludar = function(){

  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
Personas.prototype.soyAlto= function() {
  return this.altura > 1.7
}
//crear un prototipo de desarrollador
function Desarrolladores (nombre,apellido){
  this.nombre = nombre
  this.apellido = apellido
}
//Invocar la funcion que crea la herencia
//Es necesario crear herencia antes de las acciones
hereda(Personas, Desarrolladores)

//Pisamos la funcion de Persona en Desarrollador llamada saludar
Desarrolladores.prototype.saludar = function(){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}
//el NEW crea un nuevo objeto que  asigna un prototipo y se ejecuta
// el constructor que retorna el objeto
// var Diego = new Persona('diego', 'benitez',1.8)
// var Carlos = new Persona('Carlos', 'Florez',1.7)
//EL PROTOTIPO es un OBJETO mas de javascript

// EMACScript = es el estandar de javascript para ser un lenguaje
//trae todas las funcionalidades del lenguaje