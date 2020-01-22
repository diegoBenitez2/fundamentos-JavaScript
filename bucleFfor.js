var juan ={
  nombre: 'juan',
  apellido:'Gomez',
  edad: 27,
  peso: 75,
}

console.log(`Al inicio del año ${juan.nombre} pesa ${juan.peso} kg`)

  const INCREMENTO_PESO = 0.2;
  const DIAS_AÑO = 365;
  const aumentarPeso = persona => persona.peso += INCREMENTO_PESO;
  const disminuirPeso =persona => persona.peso -= INCREMENTO_PESO;
  function pesoFinal(){}
  
for(var i = 1; i <= DIAS_AÑO; i++){
  var random = Math.random()
  if(random < 0.25){
   aumentarPeso(juan) 
  }
  else if (random < 0.5){
   disminuirPeso(juan)
  }
}
console.log(`Al final del año ${juan.nombre} pesa ${juan.peso.toFixed(1)} kg`)

