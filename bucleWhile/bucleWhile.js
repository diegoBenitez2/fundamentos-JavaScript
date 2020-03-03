var juan = {
  nombre: 'juan',
  apellido:'Gomez',
  edad: 27,
  peso: 75,
}
const META = juan.peso - 3;
const INCREMENTO_PESO = 0.2;
const  aumentardePeso = persona => persona.peso += INCREMENTO_PESO
const   adelgazar = persona => persona.peso -= INCREMENTO_PESO
var dias = 0
while(juan.peso > META){
  if(Math.random()< 0.3){
    aumentardePeso(juan)
  }
  if(Math.random()< 0.4){
    adelgazar(juan)
  }
  dias +=  1
}

console.log(`Le tomo ${dias} dias a ${juan.nombre} bajar 3Kg`)

//CONDICIONALES DO WHILE
var contador = 0;
const llueve = () => Math.random() < 0.25;

do {
  contador ++
}
while(!llueve())
if(contador > 1){
console.log(`Fui ${contador} veces hasta que llovió`);


}
else {

console.log(`Fui ${contador} vez hasta que llovió`);

}

