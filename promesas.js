//PROMESAS

/*function hazAlgo(a,b) {
    return new Promise((resolve, reject) => {  
    if (a>b) {
        resolve ({a,b})
    }else{
        reject("error")
    }
})}
function hazAlgoMas(valores) {
    let suma=valores.a+valores.b
    console.log(suma)
    return valores
}
function hazLaTerceraCosa(valores) {
    let multip=valores.a*valores.b
    console.log(multip)
}

hazAlgo(7,20)
.then(function (resultado) {  //Se puede simplificar .then(hazAlgoMas)
    return hazAlgoMas(resultado);
})
.then(function (nuevoResultado) {
    return hazLaTerceraCosa(nuevoResultado);
})
.catch((reject) => { 
    console.log("a no es mayor q b", reject);
});*/

//OTRO EJEMPLO

/*function hazAlgoMas(respuesta) {
    let soy="soy "+respuesta
    console.log(soy)
    return respuesta
}
function hazLaTerceraCosa(respuesta) {
    console.log("Lina",respuesta)
}
function hazAlgo(a, b) {
    return new Promise((resolve, reject) => {
        if (a > b) {
            resolve("funciona")
        } else {
            reject("error")
        }
    })
}
hazAlgo(7, 2)
.then(function (resultado) {
    return hazAlgoMas(resultado);
})
.then(function (nuevoResultado) {
    return hazLaTerceraCosa(nuevoResultado);
})
.catch(((reject) => { 
    console.log("resultado:", reject);
}))*/