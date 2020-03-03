
var diego = {
  nombre: 'diego',
  apellido: 'benitez',
  edad: 27,
  ingeniero:true,
  cantante: true,
  dj: false,
  guitarrista: true,
  drone:false,
}
var juan ={
  nombre: 'juan',
  apellido:'Gomez',
  edad: 13,
}

 function imprimirProfesiones(persona){
  console.log(`${persona.nombre} es: `)
  if(persona.ingeniero){
    console.log('ingeniero')
  }
   if(persona.cantante){
    console.log('cantante')
  }
   if(persona.guitarrista){
    console.log('guitarista')
  }
   if(persona.dj){
    console.log('dj')
  }
   if(persona.drone){
    console.log('piloto drone')
  }
}
imprimirProfesiones(diego);

const  MAYORIA_EDAD = 18;
//FUNCIONA ANONIMA
// const  Mayor = function(persona){
//   return persona => persona.edad  >= MAYORIA_EDAD}
  //ARROW FUNCTION
  //  const  Mayor =  persona => {
//   return persona.edad  >= MAYORIA_EDAD
// }
//QUITANDO EL RETURN CUANDO  SI Y SOLO SI  RETORNA ALGO
const Mayor = ({edad}) => edad  >= MAYORIA_EDAD
const Menor = ({edad}) => edad <= MAYORIA_EDAD

function imprimirSiEsMayorEdad(persona){
  if(Mayor(persona)){
    console.log(`${persona.nombre} es mayor de edad`)
  }
  else if (Menor(persona)){
    console.log(`${persona.nombre} es  menor  de edad`)
  }
}
function permitirAcceso(persona){
  if(!Mayor(persona)){
    console.log('ACCESO DENEGADO');
  }
  else(console.log('ACCESO CONCEDIDO'));
}
imprimirSiEsMayorEdad(diego);
imprimirSiEsMayorEdad(juan);



