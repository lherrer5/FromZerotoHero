//Crea una clase llamada Punto con sus dos coordenadas X e Y.

class Punto {
    constructor(x, y){//Añade un método constructor para crear puntos fácilmente
        if (x){
            this.corX=x;
        } else{
        this.corX=0;
        }
        if (y){
            this.corY=y;
        } else{
        this.corY=0;
        }
    }

    //Crea un método llamado ver pa q al imprimir x pantalla un punto aparezca en formato(X,Y)
    ver (){//debe estar fuera de constructor
        console.log(`(${this.corX},${this.corY})`)//this es un valor del object, y como no he definido a x ni y, para llamarlas dentro debo utilizar this 
    }
    //Añade un método llamado vector, que toma otro punto y calcula el vector resultante entre los dos puntos 
    //(en el nuevo punto X es la suma de las coordenadas en X 
    //nuevo Y es la suma de las dos coordenadas en Y).
    vector(puntoNuevo){//primera coordenada de la clase q estoy y segunda del objeto puntoNuevo la.corX y la .corY
        let puntoNuevoX= this.corX+ puntoNuevo.corX;
        let puntoNuevoY= this.corY+ puntoNuevo.corY;
        return new Punto(puntoNuevoX,puntoNuevoY)
    }

    Distance (puntoNuevo){//un punto de la clase y uno externo
        let puntoNuevoX= this.corX- puntoNuevo.corX;
        let puntoNuevoY= this.corY- puntoNuevo.corY;
        return Math.sqrt(puntoNuevoX*puntoNuevoX+puntoNuevoY*puntoNuevoY)
    }
    //Añade un método llamado distancia, que tome otro punto y calcule la distancia entre los dos puntos y la muestre por pantalla. 
    //La fórmula es la siguiente:
    static distancia(puntoDis1, puntoDis2){//con estatico funciona para dos puntos creados fuera de la clase
        let puntoDisX=  puntoDis1.corX- puntoDis2.corX;
        let puntoDisY= puntoDis1.corY- puntoDis2.corY;
        return Math.sqrt(puntoDisX*puntoDisX+puntoDisY*puntoDisY)
    }
}


//Probando formas imprimir
const prueba= new Punto(1,5)
console.log(prueba.corX, prueba.corY)//sale 1 5
console.log(prueba)// sale Punto { corX:1. corY:5}

//Si no se recibe una coordenada, su valor será cero.
const puntoCero= new Punto()
console.log(puntoCero.corX, puntoCero.corY)
//pa imprimir ver
puntoCero.ver()//ojo ver es una funcion y por eso se llama con () imprime (0,0)

const xCero= new Punto(0,4)
console.log(xCero.corX, xCero.corY)
//pa imprimir ver
xCero.ver()//imprime (0,4)

const AmbasCord= new Punto(3,9)
console.log(AmbasCord.corX, AmbasCord.corY)
//pa imprimir ver
AmbasCord.ver()

const nuevoVector= AmbasCord.vector(xCero)//No puedo pasarse numeros como parametros?? xCero es parametro puntoNuevo y this.Cor son los de AmbasCord q es al q le estoy aplicando el metodo
nuevoVector.ver()
//otra forma más rapida. el .vector m crea el nuevo punto y el ver m lo muestra
AmbasCord.vector(xCero).ver()//imprime (3,13) x=0+3 y=4+9

const newDistance= AmbasCord.Distance(xCero)
console.log(newDistance)
console.log(Punto.distancia(AmbasCord,xCero))//como es estatico para hacer uso del metodo, lo llamo directamente sobre la clase