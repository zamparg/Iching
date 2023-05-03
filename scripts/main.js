start()
let trigrams
let hexagrams

let buttonContainer=document.getElementById('buttonContainer')
let buttonCoins=document.getElementById('buttonCoins')
let flipper = 1
buttonCoins.addEventListener('click', flipCoins)

let question = {
    'lines':[],
}

function flipCoins(e) {
    let moneda1 = Math.round(Math.random() * (3 - 2) + 2)
    let moneda2 = Math.round(Math.random() * (3 - 2) + 2)
    let moneda3 = Math.round(Math.random() * (3 - 2) + 2)
    let sumatoria= moneda1+moneda2+moneda3
    let flip ={
        'line': typeOfLine(sumatoria),
        'mutable':mutable(sumatoria)
    }
    question.lines.push(flip)
    console.log(question)
    if(flipper==6){
        buttonContainer.innerHTML=``
        searchHexagram()
    }
    flipper+=1
}

function mutable(coin) {
    if (coin === 6 || coin === 9) {
        return true
    }
    else {
        return false
    }
}
function typeOfLine(coin) {
    if (coin === 7 || coin === 9) {
        return true
    }
    else {
        return false
    }
}

function searchHexagram(){
    question.trigramInf = trigrams.trigrams.find(el => el.lines[0]== question.lines[0].line &&
        el.lines[1]== question.lines[1].line &&
        el.lines[2]== question.lines[2].line
        )
    question.trigramSup = trigrams.trigrams.find(el => el.lines[0]== question.lines[3].line &&
        el.lines[1]== question.lines[4].line &&
        el.lines[2]== question.lines[5].line
        )
    question.hexagram = hexagrams.iching.find(el => el.hexagram.superior == question.trigramSup.id &&
        el.hexagram.inferior == question.trigramInf.id)
    
    let hegramMutable = question.lines.map(el => el.mutable?!el.line:el.line)
 
    question.hexagramMutable = {
        inf:trigrams.trigrams.find(el => el.lines[0]== hegramMutable[0] &&
            el.lines[1]== hegramMutable[1] &&
            el.lines[2]== hegramMutable[2]
            ),
        sup:trigrams.trigrams.find(el => el.lines[0]== hegramMutable[3] &&
            el.lines[1]== hegramMutable[4] &&
            el.lines[2]== hegramMutable[5]
            ),
    }
    question.hexagramMutable.hex= hexagrams.iching.find(el => el.hexagram.superior == question.hexagramMutable.sup.id &&
        el.hexagram.inferior == question.hexagramMutable.inf.id)
}

async function fetchData(url){
    let dataAsync = await fetch(url)
        .then(response=>response.json())
        .then(datos =>{            
        return datos})
    return dataAsync
}

async function start(){
    trigrams = await fetchData('./scripts/trigrams.json');
    hexagrams = await fetchData('./scripts/data.json')
}