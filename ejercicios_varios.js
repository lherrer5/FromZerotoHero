/*EJERCICIO 2 – SI CONDICIONAL
Realizar un ejercicio en el cual se definan las siguientes variables “precio_kilometro”, “vehiculo”, “kms_recorridos”, “litros_consumidos”. A continuación, defina y realice los cálculos para obtener el total a pagar, teniendo en cuenta las siguientes consideraciones.
Si el vehículo es “coche”, el precio kilometro ha de ser 0.10, si es “moto” ha de ser 0.20 y si es “autobús” 0.5. si los litros consumidos están entre 0 y 100 se ha de añadir 1 al total, si es mayor la cantidad de litros consumidos se ha de añadir 2 al total.*/

let precio_kilometro;
let vehiculo;
let kms_recorridos;
let litros_consumidos; 
let precio_litros_consumidos;


function total(vehiculo,litros_consumidos,kms_recorridos) {
    if (vehiculo==="carro") {
        precio_kilometro=kms_recorridos*0.10;
    }else if (vehiculo==="moto") {
        precio_kilometro=kms_recorridos*0.20;
    }else if (vehiculo==="bus") {
        precio_kilometro=kms_recorridos*0.5;
        } if (litros_consumidos>0 && litros_consumidos<100) {
        precio_litros_consumidos=1
        }else{
        precio_litros_consumidos=2
        }
    return precio_kilometro+precio_litros_consumidos;
}

console.log(total("carro",50,100))

//Escribe un programa que comparando 3 números y escriba en la pantalla el mayor de los tres.

let a=80
let b=300
let c=10

if (a>b && a>c) {
    console.log(a+" es el numero mayor");
}else if(b>a && b>c){
    console.log(b+" es el numero mayor");
}else{
    console.log(c+" es el numero mayor");
}

//Escribe un programa que tome una frase y escriba cuantas veces aparece la letra a

let frase="Como ya tienes experiencia en juguetes, te piden crear una aplicación para enseñar a niños un poco de matemáticas."
let lasA= []
for (let i = 0; i < frase.length; i++) {
	if (frase[i].toLowerCase() === "a") lasA.push(i);
}

console.log(lasA.length)

//Escribe un programa que de una frase, diga la cantidad de vocales que aparecen
let frase2="Como ya tienes experiencia en juguetes, te piden crear una aplicación para enseñar a niños un poco de matemáticas."
let lasVocales= []
for (let i = 0; i < frase2.length; i++){
    if (frase2[i].toLowerCase() === "a"){
        lasVocales.push(i)
    }else if (frase2[i].toLowerCase() === "e"){
        lasVocales.push(i)
    }else if (frase2[i].toLowerCase() === "i"){
        lasVocales.push(i)
    }else if (frase2[i].toLowerCase() === "o"){
        lasVocales.push(i)
    }else if (frase2[i].toLowerCase() === "u"){
        lasVocales.push(i)
}}

console.log(lasVocales.length)

//Más corto
let lasvocalesCorto=[]
for (let i = 0; i < frase2.length; i++){
    if (frase2[i].toLowerCase() === "a" || frase2[i].toLowerCase() === "e"|| frase2[i].toLowerCase() === "i"|| frase2[i].toLowerCase() === "o"|| frase2[i].toLowerCase() === "u"){
        lasvocalesCorto.push(i)
}}
console.log(lasvocalesCorto.length)

//Para cada vocal

let lasVocalesA= []
let lasVocalesE= []
let lasVocalesI= []
let lasVocalesO= []
let lasVocalesU= []

for (let i = 0; i < frase2.length; i++){
    if (frase2[i].toLowerCase() === "a"){
        lasVocalesA.push(i)
    }else if (frase2[i].toLowerCase() === "e"){
        lasVocalesE.push(i)
    }else if (frase2[i].toLowerCase() === "i"){
        lasVocalesI.push(i)
    }else if (frase2[i].toLowerCase() === "o"){
        lasVocalesO.push(i)
    }else if (frase2[i].toLowerCase() === "u"){
        lasVocalesU.push(i)
}}

console.log("La cantidad de A es "+lasVocalesA.length)
console.log("La cantidad de E es "+lasVocalesE.length)
console.log("La cantidad de I es "+lasVocalesI.length)
console.log("La cantidad de O es "+lasVocalesO.length)
console.log("La cantidad de U es "+lasVocalesU.length)


//Una función que no reciba parámetros y muestre siempre 3 mensajes con salto de línea cada mensaje.

function mensaje() {
    console.log("Mensaje1");
    console.log("Mensaje2");
    console.log("Mensaje3");
}

mensaje()

//segunda opc

function mensaje2() {
    return "Mensaje1\nMensaje2\nMensaje3"
}

console.log(mensaje2())

//Una función que reciba un nombre como parámetro y que siempre se presente en pantalla. Ej: Hola a todos, soy David.
function presenta(nombre) {
    console.log("Hola a todos soy "+nombre);
}

presenta("Lina")

//Una función que reciba dos números y que devuelva el valor del producto entre ellos.
function multiplica(num1,num2) {
    return  num1*num2
}

console.log(multiplica(2,3))
const resultado=multiplica(2,3)

//Una función que reciba un array y devuelva el doble de sus elementos
let numeros=[1,2,3]

function duplicar(numeros){
    return numeros.map(n => n*2)
}

console.log(duplicar(numeros))

//con callBack
let numeros2=[1,2,3]

const result=numeros2.map(function(numero){
    return duplicar2(numero,10);
});

function duplicar2(numero,multiplicador){
    return numero*multiplicador;
}

console.log(result)

//decir si palabra empieza por vocal o consonante


