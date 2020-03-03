//request
const API_URL = "https://swapi.co/api/"
const PEOPLE = 'people/:id'

//la respuesta se envie a otra pagina
const opts = {crossDomain:true}
//peticion en JQUERY

 function obtenerPersonje(id, callback){

    const url = `${API_URL}${PEOPLE.replace(':id', id)}`
     $ .get(url, opts,callback).fail(()=>{
       console.log(`No se pudo cargar el personaje ${id}`)
     })
     
  }


obtenerPersonje(1,function(personaje){
  console.log(`Hola yo soy ${personaje.name}`)
  obtenerPersonje(2,function(personaje){
    console.log(`Hola yo soy ${personaje.name}`)
    obtenerPersonje(3,function(personaje){
      console.log(`Hola yo soy ${personaje.name}`)
      obtenerPersonje(4,function(personaje){
        console.log(`Hola yo soy ${personaje.name}`)
        obtenerPersonje(5,function(personaje){
          console.log(`Hola yo soy ${personaje.name}`)
          obtenerPersonje(6,function(personaje){
            console.log(`Hola yo soy ${personaje.name}`)
            obtenerPersonje(7,function(personaje){
              console.log(`Hola yo soy ${personaje.name}`)
            })
          })
        })
      })
    })

  })
})


