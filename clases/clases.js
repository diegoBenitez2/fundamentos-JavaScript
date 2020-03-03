

//TRABAJANDO CON class

class Persona{
  constructor(nombre,apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  //METODOS
  saludar(fn){
    var {nombre, apellido} = this
  console.log(`Hola, me llamo ${nombre} ${apellido}`)
  //cero siempre es false, null es false.
  if(fn){
    fn(nombre, apellido, false)
    
  }
  }


  soyAlto(){
    return this.altura > 1.7
  }

}

class Desarrollador extends Persona{

  constructor(nombre, apellido, altura, especialidad) {
  //   //llama al constructor de la clase que extiende
    super(nombre, apellido, altura)
    this.especialidad = especialidad
    }
    //se trae la funcion y se ejecuta en saludar()
  saludar(fn){
    var {nombre, apellido, altura} = this
    console.log(`Hola, me llamo ${nombre} ${apellido}  ${altura}  y  soy Desarrollador ${this.especialidad}`)

     if(fn){
    fn(nombre, apellido, true)
  }
  }

  }

//esta funcion ira como parametro 
function responderSaludo(nombre, apellido, esDev){
  console.log(` Buen dia ${nombre} ${apellido}`)
  if(esDev){
    console.log(`Hey, no sabia que eras desarrollador/a`)
  }
}

var diego = new Persona('Diego','Benitez', 1.80)
var luis = new Desarrollador('Luis','Florez',1.80)
var diana = new Persona('Diana','Mantilla', 1.60)

diego.saludar(responderSaludo)
luis.saludar(responderSaludo)
diana.saludar()


