//Ciclos, vamos a tomar un ejemplo de una pelea entre goku y superman cada uno tiene 100 puntos de vida
//Calcular cuanto va a golpear uno a otro
//Nivel de golpe entre 5 y 12 puntos, el que sea mayor va a golpear en esa ronda
//Se va a pasar la siguiente ronda y se vuelve a calcular los puntos de cada uno de los personajes
//Esto se repite hasta que la condicion de que la vida de uno de los dos se quede sin vida 

let vidaGoku = 100
let vidaSuperman = 100

const MIN_POWER = 5
const MAX_POWER = 12

function ambosSiguenVivos(){
   return vidaGoku > 0 && vidaSuperman > 0 
}

let round = 1
//Mientras se cumpla una condicion este bloque se sigue ejecutando
while(ambosSiguenVivos()){

}