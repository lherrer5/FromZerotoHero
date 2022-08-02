//Metodos y propiedades

//forEach: solo recorre el array, no hace cambios
const numeros = [1, 2]
numeros.forEach((numero, index, arreglo) => {
    console.log(arreglo);
});
/*sale
[1,2]
[1,2]*/

const numeros2 = [1, 2, 3]
numeros2.forEach((elemento, indice) => console.log(`El numero ${elemento} está en la posición ${indice}`))
/*sale
El numero 1 está en la posición 0
El numero 2 está en la posición 1
El numero 3 está en la posición 2*/

const personas = [{
    nombre: "Luis",
    edad: 23,
},
{
    nombre: "John Galt",
    edad: 50
}
];
personas.forEach(persona => {
    console.log("Nombre: " + persona.nombre, "Edad: " + persona.edad);//console.log("Nombre: %s, Edad: %d", persona.nombre, persona.edad)
});

/*sale
Nombre: Luis Edad: 23
Nombre: John Galt Edad: 50
*/



//push: añade uno o más elementos al final de un array y devuelve array con nuevo elemento.
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');

console.log(count); // sale 4
console.log(animals); //sale ['pigs', 'goats', 'sheep', 'cows']

const otros = ["perro", "gato"]
animals.push.apply(animals, otros);
console.log(animals);//sale ['pigs', 'goats', 'sheep', 'perro', 'gato']



//map: crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos
let numbers = [1, 5, 10, 15];
let doubles = numbers.map(function (x) {
    return x * 2;
});
console.log(doubles)// sale [2, 10, 20, 30]
//con fecha
console.log(numbers.map(numb => numb * 2))// sale [2, 10, 20, 30]

let users = [
    { firstName: "Susan", lastName: "Steward" },
    { firstName: "Daniel", lastName: "Longbottom" },
    { firstName: "Jacob", lastName: "Black" }
];

let userFullnames = users.map(function (element) {
    return `${element.firstName} ${element.lastName}`;
})

console.log(userFullnames); // ['Susan Steward', 'Daniel Longbottom', 'Jacob Black']
//con felcha
let userFullnames2 = users.map(fullName => console.log(`${fullName.firstName} ${fullName.lastName}`));



//filter: crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);

console.log(result); // sale ["exuberant", "destruction", "present"]

let gente = [
    { nombre: "aaron", edad: 65 },
    { nombre: "beth", edad: 2 },
    { nombre: "cara", edad: 13 },
    { nombre: "daniel", edad: 3 },
    { nombre: "fin", edad: 1 },
]

let pequeños = gente.filter(persona => persona.edad <= 3)
console.log(pequeños);//sale [{edad: 2, nombre: "beth"}, {edad: 3, nombre: "daniel"}, {edad: 1, nombre: "fin"}]

let rango = {
    nino: 13,
    grande: 30
};

let jovenes = gente.filter(function (persona) {
    return persona.edad >= this.nino && persona.edad <= this.grande;
}, rango)

console.log(jovenes)//sale [{nombre: "cara", edad: 13},{nombre: "ella", edad: 25}]



//find: devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);// salida 12

let perrosEncontrados = [{
    raza: "Beagle",
    color: "blanco"
},
{
    raza: "Chihuahua",
    color: "amarillo"
},
{
    raza: "Pug",
    color: "negro"
}]

function encuentraMiPerro(perro) {
    return perro.raza === "Chihuahua"
}

let miPerro = perrosEncontrados.find(perro => encuentraMiPerro(perro));
console.log(miPerro);//{raza: 'Chihuahua', color: 'amarillo'}
//con felcha
let miPerro2 = perrosEncontrados.find(perro => perro.raza === "Chihuahua");
console.log(miPerro2);//{raza: 'Chihuahua', color: 'amarillo'}



//sort: ordena los elementos de array localmente y devuelve el arreglo ordenado. Reverse hace lo mismo pero al reves
let puntos = [1, 10, 2, 21];
puntos.sort(); // [1, 10, 2, 21] tenga en cuenta que 10 viene antes que 2 porque '10' viene antes que '2' según la posición del valor Unicode.
puntos.sort(function (a, b) { return a - b })// [1, 2, 10, 21] 
puntos.sort(function (a, b) { return b - a })// [21, 2, 10, 1] 

let frutas = ['guindas', 'manzanas', 'bananas'];
frutas.sort(); // ['bananas', 'guindas', 'manzanas']

let items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
];
console.log(items.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    // a must be equal to b
    return 0;
}))
/*sale
{ name: 'And', value: 45 },
{ name: 'Edward', value: 21 },
{ name: 'Sharpe', value: 37 }*/



//some:comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
const array4 = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;

console.log(array4.some(even)); // salida: true
const result3 = array4.some(even) ? 'True' : 'False';
console.log(result3)// salida: True


const array5 = [
    {
        id: 1,
        lenguaje: 'javascript'
    },
    {
        id: 2,
        lenguaje: 'typescript'
    }
];
console.log(array5.some(data => data.lenguaje === 'javascript')); // sale true



//every:Determina si todos los elementos en el array satisfacen una condición.
const array6 = [1, 2, 3, 4, 5];
console.log(array6.every(elem => elem >= 3))//sale false
//con objeto anterior
console.log(array5.every(data => data.lenguaje === 'javascript')); // sale false


//replace:se usa en cadenas para reemplazar partes con caracteres
const str = 'JavaScript';
const nuevaStr = str.replace("ava", "-");
console.log(nuevaStr);// J-Script


//includes: determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda
const petsS = ['cat', 'dog', 'bat'];
console.log(petsS.includes('cat')); // sale true
console.log(petsS.includes('at'));// sale false


let carros = [
    {
        "color": "morado",
        "tipo": "minivan",
        "registroDia": new Date('2017-01-03'),
        "capacidad": 7
    },
    {
        "color": "rojo",
        "tipo": "camioneta",
        "registroDia": new Date('2018-03-03'),
        "capacidad": 5
    }]
let carro = carros.find(carro => carro.color === "rojo");
console.log(carro);
/* salida:
{
//   color: 'rojo',
//   tipo: 'camioneta',
//   registroDia: 'Sat Mar 03 2018 01:00:00 GMT+0100 (GMT+01:00)',
//   capacidad: 5
}*/

//join: une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); // expected output: "Fire,Air,Water"
console.log(elements.join(''));// expected output: "FireAirWater"
console.log(elements.join('-'));// expected output: "Fire-Air-Water"


//reduce: ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
let total2 = [0, 1, 2, 3].reduce(function(a, b){ 
    return a + b; 
});
console.log(total2)// sale 6

[0,1,2,3,4].reduce(function(valorAnterior, valorActual, indice, vector){
    return valorAnterior + valorActual;
}); // Valor Devuelto: 10 si pongo },20) tomaria como valor anterior inicial 20  y devuelve 30

/*Primera llamada valorAnterior = 0, valorActual = 1, indice = 1
Segunda llamada valorAnterior = 1, valorActual = 2, indice = 2
Tercera llamada valorAnterior = 3, valorActual = 3, indice = 3
Cuarta llamada valorAnterior = 6, valorActual = 4, indice = 4
el array sobre el que se llama a reduce siempre es el objeto [0,1,2,3,4]*/



//indexOf


//findIndex


//lastIndexOf


//fill


//push


//pop


//shift


//unshift



//slice


//reverse


//splice


//flat


//from


//isArray


//concat: Para unir dos o más arrays. devuelve un nuevo array
const arrayM = ['a', 'b', 'c'];
const arrayN = ['d', 'e', 'f'];
const arrayO = arrayM.concat(arrayN);

console.log(arrayO);//sale ["a", "b", "c", "d", "e", "f"]

//para meter key:values en objetos

const personas1 = {
    nombre: "Luis",
    edad: 23,
}

const otro = {
    direc: 123,
    tel: 8787,
}
const nuevo = Object.assign(personas1, otro)
console.log(nuevo)

const nuevo2 = { ...personas1, saludo: "Hola" }
console.log(nuevo2)

//para hacer algunos cambios

const auto = [
    { idAuto: 02, color: "rojo",  idMarca: 2, anioFab: 2019 },
    { idAuto: 10, color: "azul",  idMarca: 1, anioFab: 2016 },
    { idAuto: 15, color: "negro", idMarca: 1, anioFab: 2020 },
    { idAuto: 45, color: "azul",  idMarca: 2, anioFab: 2021 }
]

const marca = [
    { idMarca: 1, nombre: 'Nissan' },
    { idMarca: 2, nombre: 'Honda' },
    { idMarca: 3, nombre: 'Toyota' }
];


// Primero mapea cada id a su nombre de marca.(id marca es reemplazado por nombre)
const nombresPorId = {}
marca.forEach(m => nombresPorId[m.idMarca] = m.nombre )


// Luego construye el array aplicando una transformación a cada uno de los elementos de auto
const autosConNombresMarcas = auto.map(aut => {
    const nuevo = {
        ...aut, // Todo lo que tenía el auto
        nombreMarca: nombresPorId[aut.idMarca]
    }
    // Borrar idMarca en el nuevo.
    delete nuevo.idMarca
    return nuevo
})

console.log(autosConNombresMarcas)