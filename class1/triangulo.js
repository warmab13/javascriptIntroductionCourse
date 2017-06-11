//El codigo funciona pero el problema es que no se ve muy bien, no es nada descriptivo, debemos de refactorizar este codigo 
//console.log('El area de un triagulo de base 5 y altura 7 es: ' + 5 * 7 / 2);
//Javascript permite utilizar comillas "" o '' para realizar cadenas de caracteres, sin embargo tambien podemos omitir el signo de mas para concatenar

//console.log(`El area de un triagulo de base 5 y altura 7 es:  ${ 5 * 7 / 2}`);
//Utilizando el acento invertido podemos declarar un template que renderize el codigo y lo interprete en el navegador.
//Ahora el fin es generar una funcion para que los parametros del triangulo sean variables,
//Con los elementos del template podemos generar una expresion sencilla para crear nuestro entorno de function

/*let base = 5
let height = 7
console.log(`El area de un triagulo de base ${base} y altura ${height} es:  ${ base * height / 2}`);*/
//El resultado de la operacion sigue siendo el mismo, pero fin es abstraer esto a algo mucho mas descriptivo,

//Para realizar una funcion hay dos formas utilizando la palabra reservada function, se pueden crear funciones anonimas
/*function() pero esto no nos permitiria llamarla en donde quisieramos*/
//Sin embargo se puede realizar con un nombre en especifico
/*let base = 5
let height = 7
function triangleArea(base, height){
    return base * height / 2
}
console.log(`El area de un triagulo de base ${base} y altura ${height} es: 
     ${triangleArea(base, height)}`);
     //El resultado respeta los espacios del enter en la consola.*/

//La siguiente forma de declarar funciones es con una ArrowFunction o una funcion flecha 
//Nosotros podemos declarar una variable a la cual se le asigna una funcion anonima la cual te permite crear un resultado de la function,
//asignandole a la misma variable elemento del resultado de la funcion
//Esta la primera forma de declara la funcion haciendo semblanza al elemento creado
let base = 5
let height = 7
let triangleArea = function (base, height){
    return base * height / 2
}
console.log(`El area de un triagulo de base ${base} y altura ${height} es: 
     ${triangleArea(base, height)}`);