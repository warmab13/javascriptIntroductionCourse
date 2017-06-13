//Calcular cuanto corre en promedio una persona
const nombre = 'Alonso'
//Esto es una coleccion de datos donde podemos almacenar cualquier tipo de dato 
const days = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo'
]

//Vamos a escribir una funcion para decir cuantos km corre una persona en un dia,
//Este valor va a ser un valor random entre 5 y 15 km
function correr(){
    //Esta funcion un regresa un valor entre 0 y 1
    const min = 5
    const max = 15
    //Math.floor Devuelve el máximo entero menor o igual a un número.
    return Math.floor(Math.random() * (max-min)) + min

}
//El ciclo for esta compuesto de una variable de conteo casi siempre de utiliza i como indice,
// una condicion para finalizar el ciclo,
// y la variable i que funciona como indice es la que va a ir aumentando o disminuyendo
// cuando se requiera
let totalKms = 0
for(let i = 0; i < days.length; i++){
    const kms = correr()
    totalKms += kms
    console.log(`El día ${days[i]} ${nombre} corrió ${kms} kms`)
}
