/*
    TIRAR MONEDAS: 
    Devuelve un valor: 6,7,8,9
    genera objeto => tipo de línea = true o false (si es completa o abierta).
                    mutable= true o false
                    a los 3---> guardar trigrama (requerimos json de trigramas con id)
                    
    obj = {
        trigramaInf= id
        trigramaSup = id
        lineas ={
            1:true o false si es mutable
            2:
            3:
        }
    }

    filtrar en data.json por trigramas y traer objeto Hexagrama. Guardar.
    funcion mutadora. 
    guardar en otra variable el hexagrama mutado también. 
    mostrar en DOM con boton de mutar -> que muestre el hexagrama mutado y permita volver. 
*/


let numeros = [6, 7, 8, 9] 

function monedasGiro(numeros) {
    moneda = numeros[Math.floor(Math.random() * numeros.length)];
    return moneda
}
console.log(monedasGiro(numeros));

function mutable() {
    if (moneda === 6 || moneda === 9) {
        return true
    }
    else {
        return false
    }
}
console.log(mutable());

function lineaCompleta() {
    if (moneda === 7 || moneda === 9) {
        return true
    }
    else {
        return false
    }
}
console.log(lineaCompleta());