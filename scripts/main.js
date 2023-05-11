// INICIAR
start()

//DECLARACIONES
let trigrams
let hexagrams

let resultContainer=document.getElementById('resultContainer')
let mutContainer=document.getElementById('mutContainer')
let resultContentContainer=document.getElementById('resultContentContainer')
let mutContentContainer=document.getElementById('mutContentContainer')
let resultImgContainer=document.getElementById('resultImgContainer')
let mutImgContainer=document.getElementById('mutImgContainer')
let coinSection = document.getElementById('coinsSection')
let buttonContainer=document.getElementById('buttonContainer')
let buttonCoins=document.getElementById('buttonCoins')
let coinContainer=document.getElementById('coinContainer')
let hexagramContainer= document.getElementById('hexagramContainer')
let buttonHexagram=document.getElementById('buttonHexagram')
let buttonMut=document.getElementById('buttonMut')
let flipper = 1

//LISTENERS

buttonCoins.addEventListener('click', flipCoins)
buttonHexagram.addEventListener('click', reveal)
let question = {
    'lines':[],
}
buttonMut.addEventListener('click', mutar)


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


// $('#historyT').on('shown', function () {
//     $("#historyContent").scrollTop(0);
// });

// $('#historyT').on('shown.bs.modal', function () {
//     $('#historyT').animate({ scrollTop: 0 }, 'slow');
// });

// $('#historyT').show().scrollTop(0);

// $('#historyContent').animate({scrollTop: 0},400);

const accordionItems = document.querySelectorAll('.collapse')
const acc = document.getElementById('history')
console.log(accordionItems)

accordionItems.forEach((el)=>{
    el.addEventListener('shown.bs.collapse',(e)=>{
        var scrollOffset = acc.scrollTop + el.parentNode.offsetTop
        acc.scroll({
            top: scrollOffset,
            left: 0, 
            behavior: 'smooth'
        })
    })})