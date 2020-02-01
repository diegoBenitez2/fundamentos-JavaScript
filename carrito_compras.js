
class Articulo  {
  constructor(codigo, nombreArticulo,precio, categoria){
  
      this.codigo = codigo
      this.nombreArticulo = nombreArticulo  
      this.precio= precio
      this.categoria = categoria
   }
 
  agregarArticulo (){}
  quitarArticulo (){}
}

class cliente {
  constructor(id, nombre, apellido, telefono, direccion){
    this.id = id
    this.nombre = nombre
    this.apellido = apellido
    this.telefono = telefono
    this.direccion = direccion
  }
  getCliente(){
    console.log(`CLIENTE--- Id: ${this.id} Nombre:${this.nombre} Telefono: ${this.telefono}`)
  }
  
}
var ListaArticulos = []
var articulo =[]
var NuevaListaArticulos = []
function GuardarArticulos(){

//GUARDAR ARTICULOS 1
var cont = 0

while(id != 0){
var  id = prompt('Numero de id del articulo ó 0 para salir')
if(id != 0){
let nombre = prompt('Nombre del articulo')
let precio = prompt('Precio del articulo')
let categoria = prompt('Categoria del articulo')
articulo[cont] = new Articulo (id, nombre, precio, categoria)
ListaArticulos.unshift(articulo[cont])
console.log(`Articulo:${ListaArticulos[0].codigo} nombre: ${ListaArticulos[0].nombreArticulo} precio ${ListaArticulos[0].precio}`)
cont+=1

    }

  }

}
//ELIMINAR ARTICULOS
function EliminarArticulos(){

var  ide = prompt('Numero de id del articulo a eliminar o 0 para salir')
if(ide != 0){

  const diferenteId = ({codigo}) =>  codigo != ide
  NuevaListaArticulos = ListaArticulos.filter(diferenteId)
  const igualId = ({codigo}) => codigo === ide
  var articuloEliminado = ListaArticulos.filter(igualId)
  console.log(`El articulo ${articuloEliminado[0].codigo} ${articuloEliminado[0].nombreArticulo} fue eliminado`)
  }
  }
   

  //IMPRIMIR CLIENTE Y CLACULAR TOTAL DEL CARRITO
      var Diego = new cliente(1122, 'Diego','Benitez', '313456780','aqui arriba')
      GuardarArticulos()
      EliminarArticulos()
      const calcPrecio = (acum, {precio}) => acum + parseInt(precio) 
      var TotalPrecioCarrito = NuevaListaArticulos.reduce(calcPrecio,0)
      debugger
      console.log(`El precio total del carrito es: $ ${TotalPrecioCarrito}`)
      Diego.getCliente()
















