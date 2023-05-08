// INICIAR
start()

//DECLARACIONES
let trigrams
let hexagrams

let resultContainer=document.getElementById('resultContainer')
let mutContainer=document.getElementById('mutContainer')
let coinSection = document.getElementById('coinsSection')
let buttonContainer=document.getElementById('buttonContainer')
let buttonCoins=document.getElementById('buttonCoins')
let coinContainer=document.getElementById('coinContainer')
let hexagramContainer= document.getElementById('hexagramContainer')
let buttonHexagram=document.getElementById('buttonHexagram')
let flipper = 1

//LISTENERS

buttonCoins.addEventListener('click', flipCoins)
buttonHexagram.addEventListener('click', reveal)
let question = {
    'lines':[],
}


// FUNCIONES

//Traer la data
async function fetchData(url){
    let dataAsync = await fetch(url)
        .then(response=>response.json())
        .then(datos =>{            
        return datos})
    return dataAsync
}
//Iniciar
async function start(){
    trigrams = await fetchData('./scripts/trigrams.json');
    hexagrams = await fetchData('./scripts/data.json')
}