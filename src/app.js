//IMPORTS
import { getData } from "./services/getData.js"

//DECLARACIONES
let trigrams
let hexagrams



// INICIAR
start()

const resultContainer=document.getElementById('resultContainer')
const mutContainer=document.getElementById('mutContainer')
const resultContentContainer=document.getElementById('resultContentContainer')
const mutContentContainer=document.getElementById('mutContentContainer')
const resultImgContainer=document.getElementById('resultImgContainer')
const mutImgContainer=document.getElementById('mutImgContainer')
const coinSection = document.getElementById('coinsSection')
const buttonCoins=document.getElementById('buttonCoins')
const coinContainer=document.getElementById('coinContainer')
const hexagramContainer= document.getElementById('hexagramContainer')
const buttonHexagram=document.getElementById('buttonHexagram')
const buttonMut=document.getElementById('buttonMut')
const buttonReturn = document.getElementById('buttonReturn')
let flipper = 1

//FUNCIONES

//LISTENERS

buttonCoins.addEventListener('click', flipCoins)
buttonHexagram.addEventListener('click', reveal)
let question = {
    'lines':[],
}
buttonReturn.addEventListener('click', ()=>{
    window.location.href = "../app.html"

})

buttonMut.addEventListener('click', mutar)


// FUNCIONES
//Iniciar
async function start(){
    trigrams = await getData('./public/trigrams.json');
    hexagrams = await getData('./public/data.json')
}

//Tirar monedas
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
    if(flipper==6){
        searchHexagram()
        buttonCoins.setAttribute('hidden', 'true')
        buttonHexagram.removeAttribute('hidden')
    }
    flipper+=1
}
//Imprimir las líneas
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
}

// Pintar monedas
function printCoin(coin1,coin2,coin3, sumatoria) {
    const coin1C= document.getElementById('coin1')
    const coin2C= document.getElementById('coin2')
    const coin3C= document.getElementById('coin3')

    coin1C.innerHTML=""
    coin2C.innerHTML=""
    coin3C.innerHTML=""

    //coinContainer.innerHTML =``
    let imageCoin2 = "https://res.cloudinary.com/dhvz93a4h/image/upload/v1683125326/I_ching%20_trigramas/s-l500-removebg-preview_a9kjcj.png"
    let imageCoin3 = "https://res.cloudinary.com/dhvz93a4h/image/upload/v1683125331/I_ching%20_trigramas/s-l500__1_-removebg-preview_lfsw3k.png"
    
    let moneda1 = document.createElement("div")
    let moneda2 = document.createElement("div")
    let moneda3 = document.createElement("div")
    
    moneda1.setAttribute('class','coin1 coins animate__animated animate__flip')
    moneda2.setAttribute('class','coin2 coins animate__animated animate__flip')
    moneda3.setAttribute('class','coin3 coins animate__animated animate__flip')
    moneda1.innerHTML=`<img src="${coin1==2? imageCoin2 : imageCoin3}" class="object-fit-contain">`
    moneda2.innerHTML=`<img src="${coin2==2? imageCoin2 : imageCoin3}" class="object-fit-contain">`
    moneda3.innerHTML=`<img src="${coin3==2? imageCoin2 : imageCoin3}" class="object-fit-contain">`
    
    coin1C.appendChild(moneda1);
    setTimeout(() => {
        coin2C.appendChild(moneda2);
      }, "750");
      setTimeout(() => {
        coin3C.appendChild(moneda3);
        buttonCoins.removeAttribute('disabled')
        printLines(sumatoria)
      }, "1500");
}

//Buscar Hexagrama
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

//Revelar Resultados
function reveal(){
    coinSection.classList.add('hide')
    resultSection.classList.toggle('hide')
    pintarHexagramas(resultImgContainer, question.trigramSup, question.trigramInf)
    pintarInfo(resultContentContainer, question.hexagram)
    pintarLineasMut(resultContentContainer,question)
    pintarHexagramas(mutImgContainer, question.hexagramMutable.sup, question.hexagramMutable.sup)
    pintarInfo(mutContentContainer, question.hexagramMutable.hex)
    let botonesRedes = `<h5 class="text-center text-bold"> Compartir en redes sociales</h5>
        <div class="d-flex justify-content-center ">
        <a  target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://librodelasmutaciones.com.ar/app.html"><i class="bx bxl-facebook-square"></i></a>
        <a  target="_blank" href="https://twitter.com/intent/tweet?text=Hoy pregunté al I-ching y conoci mi destino, me salió el Hexagrama ${question.hexagram.id}: ${question.hexagram.title}. Queres conocer el tuyo?&url=https://librodelasmutaciones.com.ar/app.html&hashtags=iching"><i class='bx bxl-twitter'></i></a>
        <a  target="_blank" href="whatsapp://send?text=Hoy pregunté al I-ching y conoci mi destino, me salió el Hexagrama ${question.hexagram.id}: ${question.hexagram.title}. Queres conocer el tuyo? - https://librodelasmutaciones.com.ar/app.html" data-action="share/whatsapp/share"><i class="bx bxl-whatsapp"></i></a>
        </div>
        `
   document.getElementById('redesContainer').innerHTML+=botonesRedes

    //let button = `<button onclick="mutar(e)">VER HEXAGRAMA MUTADO</button>`
}

//Ver resultados mutados y originales
function mutar(){
    resultContainer.classList.toggle('hide')
    mutContainer.classList.toggle('hide')
    if(buttonMut.textContent=='VER HEXAGRAMA MUTADO'){
        buttonMut.textContent='VER HEXAGRAMA ORIGINAL'
    }else{
        buttonMut.textContent='VER HEXAGRAMA MUTADO'
    }
    window.scrollTo({
        top:0, behavior:"smooth"
      })
}

//pintar hexagramas
function pintarHexagramas(container, trigramSup,trigramInf){
    container.innerHTML+=`
    <div id="triImgCont" class="d-flex flex-column" >
        <img class="triImg" src="${trigramSup.image_new_colors}" alt="tri sup" id="img__trig__sup"/>
        <img class="triImg" src="${trigramInf.image_new_colors}" alt="tri inf" id="img__trig__inf"/>
        <p class="text-center" style="font-size: 1.5rem;"><em>${trigramSup.image_name} sobre ${trigramInf.image_name}</em></p>
    </div>
    `
}

function pintarInfo(container, data) {
    container.innerHTML += ` <h2>Hexagrama ${data.id}: ${data.title}</h2>
            <p>${espaciar(data.description.resume)}</p>

            <h3>Juicio:</h3>
            <p>${espaciar(data.description.judgment)}</p>

            <h3>Imagen:</h3>
            <p>${espaciar(data.description.image)}</p>`
}

function pintarLineasMut(container, question){
    container.innerHTML+=`<h3>Las Lineas:</h3>`
    for (let i = 0; i <=5 ; i++) {
        if(question.lines[i].mutable){
            let texto=question.hexagram.description.lines[i].tittle
            container.innerHTML+=`<h4><b>${negritear(texto)}</b><i>${cursivear(texto)}</i></h4>
            <p>${espaciar(question.hexagram.description.lines[i].description)}</p>`
        }
    }
    if(!question.lines.some(line => line.mutable==true)){
        question.hexagram.description.lines.forEach(element => {
            container.innerHTML+=`<h4><b>${negritear(element.tittle)}</b><i>${cursivear(element.tittle)}</i></h4>
            <p>${espaciar(element.description)}</p>`
        });
    }

}
function negritear(texto){
    let regEx=/.+\:/g
    let negrito=texto.match(regEx)
    return negrito
}
function cursivear(texto){
    let regEx=/\“.+/gi
    let cursiva=texto.match(regEx)
    return cursiva
}
function espaciar(texto){
    return texto.replaceAll("\n", "<br>");
}

