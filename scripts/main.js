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
let buttonContainer=document.getElementById('buttonContainer')
let buttonCoins=document.getElementById('buttonCoins')
let flipper = 1
buttonCoins.addEventListener('click', flipCoins)

let question = {
    'hexagram':[],
    'hexagramM':[]
}


function flipCoins(e) {
    let moneda1 = Math.round(Math.random() * (3 - 2) + 2) // devuelve un valor entre 2 y 3
    let moneda2 = Math.round(Math.random() * (3 - 2) + 2)
    let moneda3 = Math.round(Math.random() * (3 - 2) + 2)
    console.log(moneda1,moneda2, moneda3)
    // función que pinte monedas
    let sumatoria= moneda1+moneda2+moneda3
    let flip ={
        'line': typeOfLine(sumatoria),
        'mutable':mutable(sumatoria)
    }
    question.hexagram.push(flip)
    if(flipper==6){
        buttonContainer.innerHTML=``
    }
    flipper+=1
    console.log(question)
}


function mutable(coin) {
    if (coin === 6 || coin === 9) {
        return true
    }
    else {
        return false
    }
}
console.log(mutable());

function typeOfLine(coin) {
    if (coin === 7 || coin === 9) {
        return true
    }
    else {
        return false
    }
}
console.log(typeOfLine());