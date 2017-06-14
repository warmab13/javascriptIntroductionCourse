//Calcular cuantos milisegundos, segundos, minutos, horas, dias, años desde
//  mi nacimiento

//03 Feb 1991

const nacimiento = new Date(1991, 2, 3)
const hoy = new Date() //esto nos devuelve la fecha de hoy 
const tiempo = hoy - nacimiento
console.log(tiempo) //Milisegundos

const tiempoSegundos = tiempo / 1000
console.log(tiempoSegundos)

const tiempoMin = tiempoSegundos / 60
console.log(tiempoMin)

const tiempoHoras = tiempoMin / 60
console.log(tiempoHoras)

const tiempoDias = tiempoHoras / 24
console.log(tiempoDias)

const nextBirthday = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate()) //este nos regresa el año completo 

const diasSemana = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
]

diasSemana[nextBirthday.getDay()]