/*Reto: condicionales
● Supongamos que trabajas para Google. Te piden hacer un programa para
que Google Home aprenda a prender y a apagar la luz. Para eso, crea una
variable llamada lamparaPrendida. Comienza pensando que la lámpara ya
está prendida, así que asígnale el valor 1. Luego crea un condicional que le
permita a Google Home saber qué hacer para prender y apagar la
lámpara. Usa console.log( ) para imprimir por pantalla lo que debería decir
Google Home. (prendido 1, apagado 0)*/

let lamparaPrendida =2

if (lamparaPrendida===1) {
    console.log("Prendida");
} else if (lamparaPrendida===2){
    console.log("apagado");
} else {
    console.log("dañada");
}

/*Trabajas ahora para una fábrica de ascensores. Definí el procedimiento
para que podamos abrir y cerrar las puertas de un ascensor. Usaconsole.log( ) para avisarle a los usuarios que harán las puertas, es decir
Puertas abriendo, puertas cerrando*/

let puertaAscensor =1

if (puertaAscensor===1) {
    console.log("Puertas abriendo");
} else if (puertaAscensor===2){
    console.log("Puertas cerrando");
} else {
    console.log("Ascensor dañadado");
}


/*Finalmente, tu decides trabajar programando una máquina para dar acceso al
cine. Debes hacer un procedimiento que use console.log( ) para informar a los
usuarios si pueden ver una película PG18. Las condiciones son:
○ Si tienes menos de 12 años: “No puedes ingresar”
○ SI tienes entre 13 y 17 años: “Puedes ingresar con un adulto responsable
○ Si tienes más de 18 años: “Puedes ingresar”*/

let EdadingresoCine =12

if (EdadingresoCine >12 && EdadingresoCine<=17) {
    console.log("Puedes ingresar con un adulto responsable");
} else if (EdadingresoCine<=12){
    console.log("No puedes ingresar");
} else {
    console.log("Puedes ingresar");
}

/*Una juguetería te contrata para que programes un Loro que juega a Tingo
Tango. Desearía que la pruebes imprimiendo 32 veces en pantalla: Tingo!*/

for (let i = 1; i <= 33; i++) {
    if(i<=32){
        console.log("Tingo!"); 
    }if(i===33){
        console.log("Tango!"); 
    }
}


/*Reto: ciclos
● Eres Betty, la fea. Don Armando te pide que maquilles los informes del año
pasado y que imprimas los gastos de cada mes aumentándole un 10% más.
Hint: todos los meses tuvieron el mismo gasto (100), así que usa una sola
variable y aumenta en 10%. Don Armando espera que el informe se vea así:
○ Gastos mes 1: x
○ Gastos mes 2: x
○ Gastos mes 3: x….
○ Gastos mes 12: x*/

let gasto_Mes=100
let gasto_Mes_m=(gasto_Mes*0.1)+gasto_Mes

for (let i = 1; i <= 12; i++) {
    console.log("Gasto mes "+i+":"+gasto_Mes_m)
}

/*Como ya tienes experiencia en juguetes, te piden crear una aplicación para enseñar a niños un
poco de matemáticas. Ahora un juguete en forma de TV te va dando datos matemáticos. Crear
diferentes ciclos para cumplir todas las tareas que debe tener el TVTUBY
● Imprimir los números entre el 5 y el 20, saltando de tres en tres.*/

let num_De_tres=0
for (let i = 5; i <= 20; i=i+3) {
    num_De_tres=i
    console.log(num_De_tres)
}

/*Mostrar la sumatoria de todos los números entre el 0 y el 100*/

let sumatoria_num=0
for (let i = 0; i < 101; i++) {//cuando i=1 sumatoria_num=sumat anterior +i(1)=1;i=2 sumatoria_num=sumat anterior(1) +i(2)=3....
    sumatoria_num+=i
}
console.log(sumatoria_num)

/*Dado un número entero positivo (6) mostrar su factorial. El factorial de un número se
obtiene multiplicando todos los números enteros positivos que hay entre el 1 y ese número.*/

let acum=1
for (let i = 1; i <= 6; i++) {//cuando i=2 acum= acum anterior(1)*i(2)=2; i=3 acum= acum anterior(2)*i(3)=6; i=4 acum= acum anterior(6)*i(4)=24...
    acum=i*acum;
console.log("el factorial de "+i+" es "+acum)}

//con funcion recursiva

var result=factorial_function(6);

function factorial_function(n) {
    if (n<0) {
        console.log("Error")
    }
    else if (n<2) {
        return 1;
    }else{
        return n*factorial_function(n-1);//cuando n=2 result=n(2)*factoDE1(1)=2;n=3 result=n(3)*factoDE2(2)=6; n=4 result=n(4)*factoDE3(6)=24
    }
}
console.log(result)

//Muestra todos los números de la secuencia de fibonacci hasta el valor ingresado por parámetro

let num=7
let anterior=0
let acumulado=1
let actual=1

for (let i = 2; i <= num; i++) { //cuando i=3 anterior3=acum2(1) acumulado3=actual2(1) actual3=anteriro3(1)+acumulado3(1)=2; 
    anterior=acumulado;          //cuando i=4 anterior4=acum3(1) acumulado4=actual3(2) actual4=anteriro4(1)+acumulado4(2)=3
    acumulado=actual;            //cuando i=5 anterior5=acum4(2) acumulado5=actual4(3) actual5=anteriro5(2)+acumulado5(3)=5
    actual=anterior+acumulado;   //cuando i=6 anterior6=acum5(3) acumulado6=actual5(5) actual6=anteriro6(3)+acumulado6(5)=8
    console.log("Fibonacci de "+i+" es "+acumulado)//cuando i=7 anterior7=acum6(5) acumulado7=actual6(8) actual6=anteriro6(5)+acumulado6(8)=13
}


/*Muestra los números del 1 al 30 pero teniendo en cuenta los siguientes cambios:
○ Escribe pim cuando son múltiplos de 3
○ Escribe pom cuando son múltiplos de 5
○ Escribe pim pom cuando son múltiplos de 3 y 5.*/

for (let i = 1; i < 31; i++) {
    if (i%3===0 && i%5===0) {
        console.log(i+": "+"Pim")
    } else if (i%3===0) {
        console.log(i+": "+"Pom")
    } else if (i%5===0) {
        console.log(i+": "+"Pim Pom")
    } else {
    } 
}