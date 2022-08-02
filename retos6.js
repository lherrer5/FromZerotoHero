/*Reto: Funciones
Necesitamos crear una calculadora, y para ellos debemos hacer las siguientes funciones:
● Suma.
● Resta.
● Multiplicación.
● División (ten en cuenta que si se va a dividir por cero, imprimimos que no se puede dividir por
cero y el resultado será cero).
● Potenciación.
También debe ser capaz de dar soluciones a ecuaciones diferenciales (es broma 😅)...
La función debe recibir los parámetros y entregarnos el valor de la operación aritmética.
Para probar vamos a hacer 5 operaciones por cada función.
Y como plus, debemos validar que los parámetros si cumplan con que sean números. Si pasa algo
diferente como un texto u otro objeto, entonces debemos imprimir el error y devolver cero en ese caso*/

function suma(num1,num2) {
    if (typeof num1 !== 'number' || typeof num2!== 'number') {
        console.log(0);
        console.log("Ingresa un número")
    }
    if (typeof num1 === 'number' && typeof num2=== 'number') {
        return num1+num2
    }
}

let num1=20
let num2=10

console.log(suma(num1,num2))
console.log(suma(0,4))
console.log(suma("a",4))
console.log(suma(-200,50))
console.log(suma(0.25,85))

function resta(num1,num2) {
    if (typeof num1 !== 'number' || typeof num2!== 'number') {
        console.log(0);
        console.log("Ingresa un número")
    }
    if (typeof num1 === 'number' && typeof num2=== 'number') {
        return num1-num2
    }
}
console.log(resta(num1,num2))
console.log(resta(0,4))
console.log(resta("a",4))
console.log(resta(-200,50))
console.log(resta(0.25,85))

function multiplica(num1,num2) {
    if (typeof num1 !== 'number' || typeof num2!== 'number') {
        console.log(0);
        console.log("Ingresa un número")
    }
    if (typeof num1 === 'number' && typeof num2=== 'number') {
        return num1*num2
    }
}

console.log(multiplica(num1,num2))
console.log(multiplica(0,4))
console.log(multiplica("a",4))
console.log(multiplica(-200,50))
console.log(multiplica(0.25,85))

function divide(num1,num2) {
    if (typeof num1 !== 'number' || typeof num2!== 'number') {
        console.log(0);
        console.log("Ingresa un número")
    }
    if (num2===0){
        console.log(0);
        console.log("No es posible dividir por 0")
    }
    if (typeof num1 === 'number' && typeof num2=== 'number') {
        return num1/num2
    }
}

console.log(divide(num1,num2))
console.log(divide(0,4))
console.log(divide("a",4))
console.log(divide(-200,50))
console.log(divide(0.25,85))

function potencia(num1) {
    if (typeof num1 !== 'number') {
        console.log(0);
        console.log("Ingresa un número")
    }
    if (typeof num1 === 'number') {
        return num1**2
    }
}

console.log(potencia(num1))
console.log(potencia(0))
console.log(potencia(2))
console.log(potencia(-10))
console.log(potencia(0.25))


/*reto: Arrow functions
Vamos a crear una arrow function para pasarla como callback a un .map() que se le aplicará a una lista de strings, está
función tendrá la capacidad de encriptar nuestro lenguaje, y lo que hará es:
1. Primero convertir todo el mensaje a mayúscula.
2. Convertir los siguientes carácteres:
● A -> 4
● S -> 5
● E -> 3
● O -> 0
● G -> 6
● I -> 1
● T -> 7
3. Imprimir en pantalla cada frase encriptada.
Frases que estarán en el array:
“Los números pueden utilizarse como letras, y la frase resultante puede ser leída sin mucho esfuerzo.”
“Este es un mensaje super encriptado y solo los mejores podrán leerlo.”
Nota: Tengan en cuenta las tildes.*/

const frases = [
    "Los números pueden utilizarse como letras, y la frase resultante puede ser leída sin mucho esfuerzo,.",
    "Este es un mensaje super encriptado y solo los mejores podrán leerlo."
    ];


const encriptar = (frase) => {
    let mensaje=frase.toUpperCase().replace(/[Í]/gi,'1').replace(/[Á]/gi, '4').replace(/A/gi, '4').replace(/S/gi, '5')
    .replace(/E/gi, '3').replace(/O/gi, '0').replace(/G/gi, '6').replace(/I/gi, '1').replace(/T/gi, '7');
    return mensaje
}
const frasesEncriptadas = frases.map(encriptar);
for (encriptada of frasesEncriptadas){
    console.log(encriptada)
}

/*solucion alternativa 1
let str = "Los números pueden utilizarse como letras, y la frase resultante puede ser leída sin mucho esfuerzo."
const newWord = str.toUpperCase().replace(/A/gi, '4').replace(/S/gi, '5')
        .replace(/E/gi, '3').replace(/O/gi, '0').replace(/G/gi, '6').replace(/I/gi, '1').replace(/T/gi, '7')

console.log(newWord)

ALTERNATIVA dos
const frases = "Los números pueden utilizarse como letras, y la frase resultante puede ser leída sin mucho esfuerzo,."
const encriptar = (frase) => {
    // escribe tú código acá
    let mensaje=frase.toUpperCase().replace(/A/gi, '4').replace(/S/gi, '5').replace(/E/gi, '3').replace(/O/gi, '0').replace(/G/gi, '6').replace(/I/gi, '1').replace(/T/gi, '7');
    return mensaje
}

console.log(encriptar(frases))

ALTERNATIVA tres

const frases = [
    "Los números pueden utilizarse como letras, y la frase resultante puede ser leída sin mucho esfuerzo,.",
    "Este es un mensaje super encriptado y solo los mejores podrán leerlo."
    ];


function encriptar(frase) {
    let mensaje=frase.toUpperCase().replace(/A/gi, '4').replace(/S/gi, '5').replace(/E/gi, '3').replace(/O/gi, '0').replace(/G/gi, '6').replace(/I/gi, '1').replace(/T/gi, '7');
    return mensaje
}
const frasesEncriptadas = frases.map(encriptar);
console.log(frasesEncriptadas)
*/

