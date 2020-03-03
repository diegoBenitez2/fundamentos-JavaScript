//request
const API_URL = "https://swapi.co/api/"
const PEOPLE = 'people/:id'

//la respuesta se envie a otra pagina
const opts = {crossDomain:true}
//peticion en JQUERY

 function obtenerPersonje(id){
   return new Promise(function(resolve, reject){
    const url = `${API_URL}${PEOPLE.replace(':id', id)}`
     $ 
     .get(url, opts,function(data){
          resolve(data)

          
     })
     .fail(()=>{
          reject(id)
     })

   })
}

function Error (id){
  console.log(`Error en el personaje ${id}`)
}
//PROMESAS EN PARALELO CON ASYNC AWAIT
async function obtenerPersonjes(){
var ids =[1,2,3,4,5,6,7]
var promesas = ids.map(id=> obtenerPersonje(id))
try{
var personajes = await Promise.all(promesas)
console.log(personajes)
}
catch(err){
console.log('No se pude concluir por: '+err)
}
}
obtenerPersonjes()
//PROMESAS EN PARALELO SIN ASYNC AWAIT
var ids =[1,2,3,4,5,6,7]
//OPCION 1 CON FUNCTION
// var promesas = ids.map(function(id){
//   return obtenerPersonje(id)
// })
//OPCION2 CON ARROW FUNCTION
var promesas = ids.map(id=> obtenerPersonje(id))
Promise.all(promesas)
//RETORNAR UN EROR DENTRO DEL THEN
// .then(personajes => console.log(personajes),Error)

//RETORNAR EL ERROR CON CATCH
.then(personajes => console.log(personajes),Error)
.catch(Error)

// //PROMESAS EN SERIE
obtenerPersonje(1)
  .then((personaje1)=>{
    console.log(`El personaje1 es ${personaje1.name}`)
    return obtenerPersonje(2)
    })
  .then((personaje2)=>{
    console.log(`El personaje2 es ${personaje2.name}`)
    return obtenerPersonje(3)
  })
  .then((personaje3)=>{
    console.log(`El personaje3 es ${personaje3.name}`)
    return obtenerPersonje(4)
  })
  .then((personaje4)=>{
    console.log(`El personaje4 es ${personaje4.name}`)
    return obtenerPersonje(5)
  })
  .then((personaje5)=>{
    console.log(`El personaje5 es ${personaje5.name}`)
    return obtenerPersonje(6)
  })
  .then((personaje6)=>{
    console.log(`El personaje6 es ${personaje6.name}`)
    return obtenerPersonje(7)
    })
    .then((personaje7)=>{
    console.log(`El personaje7 es ${personaje7.name}`)
    })
  .catch(Error)


