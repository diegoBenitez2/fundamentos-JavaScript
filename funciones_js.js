//son variables globales
//Browser = variables en windows o cualquier (S.O)
//Servidor = variables de node o otro soft servidor
var nombre = 'diego', edad = 28
//Las funciones se utilizan para reutilizar codigo
function imprimirEdad(n ,e){
  console.log(`${n} tiene  ${e} años`)
}
//llamar la funcion
imprimirEdad(nombre,edad)
imprimirEdad('fercho', 27)
imprimirEdad('aloso',33)
imprimirEdad(18,'vickyalrma')

//ALCANCE DE LAS FUNCIONES
function imprimirMayuscula(n){
  n = n.toUpperCase()
  console.log(n)
}
imprimirMayuscula('diego')