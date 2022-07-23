/*Reto: Arreglos
1. Declara un array que vamos a llamar “estudiantes” con los siguientes
valores: Ana, Manuela, Raúl, Carolina, María, Antonio, Cristina
2. Con un ciclo recorre el array e imprime en consola los estudiantes cuyo
nombre empiece por ‘A’.
3. Con otro ciclo recorre el array e imprime en consola los estudiantes cuyo
nombre tenga más de 6 letras.*/

let estudiantes= ["Ana", "Manuela", "Raúl", "Carolina", "María", "Antonio", "Cristina"];
for (let index = 0; index < estudiantes.length; index++) {
    if (estudiantes[index][0]==="A") {
        console.log(estudiantes[index])
        }  
    }


const el3= estudiantes.filter(estudiante => estudiante.length>6);
console.log(el3)


/*Reto: Objetos
1. Declara un objeto que represente una mascota que tenga los siguientes
atributos: nombre, tipo de animal, edad, nombre del dueño y juguetes.
2. El atributo juguetes debe contener un arreglo de valores que hagan
referencia a todos los juguetes de la mascota.
3. Crea 2 mascotas más.
4. Imprime en consola los nombres de las 3 mascotas con el nombre de su
dueño.
5. Ej: Ayudante de Santa es la mascota de Homero Simpson.*/
const mascota =[
    {
    nombre: "mirri",
    tipoAnimal: "gato", 
    edad: 4, 
    nombrePropieta: "Lina", 
    juguetes: ["bolas de aluminio", "tiras"]
},
{
    nombre: "luca",
    tipoAnimal: "perro", 
    edad: 1, 
    nombrePropieta: "Caro", 
    juguetes: ["pelota", "hueso"]
},
{
    nombre: "tito",
    tipoAnimal: "gusano", 
    edad: 5, 
    nombrePropieta: "Carlos", 
    juguetes: ["hoja", "palo"]
},]

console.log(mascota[0].nombre+" es la mascota de "+mascota[0].nombrePropieta)
console.log(mascota[1].nombre+" es la mascota de "+mascota[1].nombrePropieta)
console.log(mascota[2].nombre+" es la mascota de "+mascota[2].nombrePropieta)

//con for of
for( let mascoticas of mascota){
    console.log(mascoticas.nombre+" es la mascota de "+mascoticas.nombrePropieta)
}

//segunda opcion con array
const mascota1 ={
    nombre: "mirri",
    tipoAnimal: "gato", 
    edad: 4, 
    nombrePropieta: "Lina", 
    juguetes: ["bolas de aluminio", "tiras"]
}
const mascota2 ={
    nombre: "luca",
    tipoAnimal: "perro", 
    edad: 1, 
    nombrePropieta: "Caro", 
    juguetes: ["pelota", "hueso"]
}
const mascota3 ={
    nombre: "tito",
    tipoAnimal: "gusano", 
    edad: 5, 
    nombrePropieta: "Carlos", 
    juguetes: ["hoja", "palo"]
}
let variasMascotas =[mascota1,mascota2,mascota3]

for (let i=0; i<variasMascotas.length;i++){
    console.log(variasMascotas[i].nombre+" es la mascota de "+variasMascotas[i].nombrePropieta)
}


/*Reto: Métodos del Array
1. Declara un array que tenga los números del 1 al 30, utilizando un método
del array.
2. Debes aplicar un método del array para filtrar todos los números que
sean múltiplos de 3.
3. Debes aplicar un método del array para filtrar todos los números que
sean múltiplos de 5.
4. Debes aplicar un método para crear un nuevo arreglo que contenga el
valor de cada número multiplicado por 2.
5. Declara un array que tenga valores de diferentes tipos de datos, y utiliza
un método que nos diga si todos los tipos de datos son iguales o no.*/

//let numeros=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

let x=[];

for (let i =1; i<31; i++){
        x.push(i)
    }
console.log(x)

//multiplos de 3
const multipl=x.filter(numero=>numero%3===0);
console.log(multipl)

//multiplos de 5
const multipl5=x.filter(numero=>numero%5===0);
console.log(multipl5)

//cada número multiplicado por 2
const doble=x.map(function(x){
    return x*2
})

//cada número multiplicado por 2 funcion flecha
const doble2=x.map((x)=> x*2)
console.log(doble2)


//multiplos de 5 y 3
const multipl5y3=x.filter(numero=>numero%5===0 && numero%3===0);
console.log(multipl5y3)


//array de diferentes tipos
const variado =[1,"Lina", true, undefined]

if(typeof(variado[0]) === typeof(variado[1])=== typeof(variado[2])=== typeof(variado[3])) {
    console.log("son el mismo tipo de dato")
}else{
    console.log("Son diferentes")
}

//con metodo
const datosDif=(element) => element=== typeof(variado[0]);
console.log(variado.every(datosDif));




