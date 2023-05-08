start()
let trigrams
let hexagrams

let buttonContainer=document.getElementById('buttonContainer')
let buttonCoins=document.getElementById('buttonCoins')
let coinContainer=document.getElementById('coinContainer')
let hexagramContainer= document.getElementById('hexagramContainer')
let buttonHexagram=document.getElementById('buttonHexagram')
let flipper = 1
buttonCoins.addEventListener('click', flipCoins)
buttonHexagram.addEventListener('click', reveal)
let question = {
    'lines':[],
}

function flipCoins(e) {
    buttonCoins.setAttribute('disabled', true)
    let moneda1 = Math.round(Math.random() * (3 - 2) + 2)
    let moneda2 = Math.round(Math.random() * (3 - 2) + 2)
    let moneda3 = Math.round(Math.random() * (3 - 2) + 2)
    let sumatoria= moneda1+moneda2+moneda3
    printCoin(moneda1,moneda2,moneda3, sumatoria)
    let flip ={
        'line': sumatoria==7||sumatoria==9?true:false,
        'mutable': sumatoria==6||sumatoria==9?true:false,
    }
    question.lines.push(flip)
    console.log(question)
    if(flipper==6){
        searchHexagram()
        buttonCoins.setAttribute('hidden', 'true')
        buttonHexagram.removeAttribute('hidden')
    }
    flipper+=1
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

        console.log(question)
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

function printLines(sumatoria){
    const lineaCerrada = document.createElement('img')
    const lineaAbierta = document.createElement('img')
    const lineaCerradaM = document.createElement('img')
    const lineaAbiertaM = document.createElement('img')
    lineaCerrada.setAttribute('src', "https://res.cloudinary.com/dhvz93a4h/image/upload/v1683559609/I_ching%20_trigramas/continua-removebg-preview_ywj32x_lmaqvz.png")
    lineaCerrada.setAttribute('alt',"línea cerrada")
    lineaAbierta.setAttribute('src', "https://res.cloudinary.com/dhvz93a4h/image/upload/v1683559609/I_ching%20_trigramas/discontinua-removebg-preview_bksuoe_k7yunc.png")
    lineaAbierta.setAttribute('alt',"línea abierta")
    lineaCerradaM.setAttribute('src', "https://res.cloudinary.com/dhvz93a4h/image/upload/v1683559609/I_ching%20_trigramas/continua_mutable-removebg-preview_glbhp7_c7xbm3.png")
    lineaCerradaM.setAttribute('alt',"línea cerrada mutable")
    lineaAbiertaM.setAttribute('src', "https://res.cloudinary.com/dhvz93a4h/image/upload/v1683559609/I_ching%20_trigramas/discontinua_mutable-removebg-preview_awadld_q3ozez.png")
    lineaAbiertaM.setAttribute('alt',"línea abierta mutable")
    let line =""
    if(sumatoria==6){line= lineaAbiertaM}else if(sumatoria==8){line= lineaAbierta}else if (sumatoria==7){line= lineaCerrada} else {line= lineaCerradaM}
    hexagramContainer.prepend(line)
    console.log(line)
}
function reveal(){
    coinContainer.innerHTML="REVELACIÓN"
}