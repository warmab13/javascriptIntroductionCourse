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

//Vamos a escribir una funcion para decir cuantos km corre una persona en un dia

//El ciclo for esta compuesto de una variable de conteo casi siempre de utiliza i como indice,
// una condicion para finalizar el ciclo,
// y la variable i que funciona como indice es la que va a ir aumentando o disminuyendo
// cuando se requiera
for(let i = 0; i < days.length; i++){
    console.log(`El día ${i+1} es el ${days[i]}`)
}
