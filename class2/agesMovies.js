/*Los condicionales nos permiten evaluar una situacion dentro de un caso de uso, donde
podamos aclarar que si el valor, es mayor, menor, igual, diferente, mayor y igual o menor e igual 
se ejecute la linea de codigo que se expresa dentro de la evaluacion, esto nos permite manejar directamente
una evaluacion de los conceptos inicializados o manipulados dentro del programa.
Tipos de datos principales
Los tipos de datos principales (primitivos) son:
Cadena.tring (Tipo de datos)
Un valor de cadena está formado por una cadena de cero o más caracteres Unicode (letras, dígitos y signos de puntuación).  El tipo de datos string se usa para representar texto en JavaScript.  Incluya literales de cadena en los scripts, encerrándolos entre pares de comillas sencillas o dobles.
Número Number En JavaScript, no se distingue entre los valores enteros y de punto flotante; un número de JavaScript puede ser cualquiera de ellos (internamente, JavaScript representa todos los números como valores de punto flotante).
Boolean Mientras que los tipos de datos de cadena y número pueden tener un número prácticamente ilimitado de valores diferentes, el tipo de datos booleano sólo puede tener dos:  Estos son los literales true y false.  Un valor booleano es un valor de validez: especifica si la condición es verdadera o no.  

Tipos de datos compuestos
Los tipos de datos compuestos (de referencia) son:
object {}
Matriz []

Tipos de datos especiales
Los tipos de datos especiales son:
Null Una variable que contiene null no contiene ningún número, cadena, valor booleano, matriz u objeto.  Para borrar el contenido de una variable (sin eliminar la variable), asígnele el valor null.  
No definido undefined Se devuelve el valor undefined cuando se usa una propiedad de objeto que no existe o una variable que se ha declarado, pero nunca ha tenido un valor asignado.*/

const starWars7 = 'StarWars: El despertar de la Fuerza'
const pgStarWars7 = 13

const nameAlonso = 'Alonso'
const ageAlonso = 26

const nameDante = 'Dante'
const ageDante = 11

function canWatchStarWars7(name, age){
    if(age >= pgStarWars7){
        alert(`${name} puede pasar a ver ${starWars7}`)
    }else{
        alert(`${name} no puede pasar a ver ${starWars7}.
        Tiene ${age} años y necesita tener ${pgStarWars7}`)
    }
}

canWatchStarWars7(nameAlonso, ageAlonso);
canWatchStarWars7(nameDante, ageDante);
/*Esta es la manera de invocar las funciones fuera de su contexto con el fin de pasarle parametros */