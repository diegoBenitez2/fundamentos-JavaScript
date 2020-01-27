

//TRABAJANDO CON class

class Persona{
  constructor(nombre,apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  //METODOS
  saludar(){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
  }

  soyAlto(){
    return this.altura > 1.7
  }

}

class Desarrollador extends Persona{
  constructor(nombre, apellido, altura){
    //llama al constructor de la clase que extiende
    super(nombre, apellido, altura)
  }
  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} soy Desarrollador`)

  }
}