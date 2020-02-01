const Mac = {
  edad: 0,
  velo: 0,
  color: 0
}

const Smith = {
  edad: 0,
  velo: 0,
  tono: 0
}

const Jack = {
  edad: 0,
  velo: 0,
  tono: 0
}

const  Willy = {
  edad: 0,
  velo: 0,
  tono: 0
}

var intervalo = setInterval(function(){

Mac.edad = Math.ceil(Math.random() * 2)

Mac.velo = Math.ceil(Math.random() * 2)
Mac.tono = Math.ceil(Math.random() * 2)

Jack.edad = Math.ceil(Math.random() * 2)
Jack.velo = Math.ceil(Math.random() * 2)
Jack.tono = Math.ceil(Math.random() * 2)

Smith.edad = Math.ceil(Math.random() * 2)
Smith.velo = Math.ceil(Math.random() * 2)
Smith.tono = Math.ceil(Math.random() * 2)

Willy.edad = Math.ceil(Math.random() * 2)
Willy.velo = Math.ceil(Math.random() * 2)
Willy.color = Math.ceil(Math.random() * 2)
// if(respuestaColor() && respuestaEdad()&& respuestaVelo()){
if(respuesta()){
clearInterval(intervalo)

  console.log('el caballo mas viejo es el de : Mac' )
  console.log('el caballo mas oscuro es el de :  Smith')
  console.log('El caballo mas lento es el de: Jack')

}
else{
  console.log('nada')
}
},1)



var respuesta = function(){


if(Mac.tono > Smith.tono&&
  Mac.velo > Jack.velo &&
 Mac.edad  >  Jack.edad &&
 Willy.velo > Jack.velo &&
 Mac.edad > Willy.edad &&
 Mac.edad > Smith.edad &&
 Willy.tono > Smith.tono &&
 Smith.velo > Jack.velo&&
 Jack.tono > Smith.tono 
 ){
  return true

  }
  return false 
}