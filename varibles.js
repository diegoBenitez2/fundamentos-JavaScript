
var nombre ='diego', apellido = 'Benitez'
var edad = 27;
console.log('hola ' + nombre+' ' +apellido)
console.log('Tengo'+edad+'años')

//VARIABLES STRINGS

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()
//primer caracter del string
var primeraLetraDelNombre = nombre.charAt(0)
//cantidad de letras 
var cantodadDeLetrasDelNombre = nombre.length
//interpolacion de variables
//permite escribr codigo javascript
var nombreCompleto = `${nombre} ${apellido.toUpperCase}`
//escoger letras de un string
var str = nombre.substr(1, 2)
var ultimaLetraNombre = nombre.charAt(4)

//VARIABLES NUMERCAS

// var edad = 27
 edad+= 1
 var pesos = 75
//  pesos=pesos-2
pesos -=2
var snwicht = 1
pesos = pesos -snwicht
var jugarFutbol = 3
pesos -= jugarFutbol

var precioVino = 200.3
var total = Math.round(precioVino* 100 * 3) / 100
//controlar la cantidad de decimales resultando en un string
var totalStr = total.toFixed(2)
// cambiar a decimales 
var total2= parseFloat(totalStr)
var pizza = 8
var persona = 2
var catidadDePorcionesPersona = pizza / persona


