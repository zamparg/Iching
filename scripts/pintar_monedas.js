function printCoin(coin1,coin2,coin3, sumatoria) {
    coinContainer.innerHTML =``
    let imageCoin2 = "https://res.cloudinary.com/dhvz93a4h/image/upload/v1683125326/I_ching%20_trigramas/s-l500-removebg-preview_a9kjcj.png"
    let imageCoin3 = "https://res.cloudinary.com/dhvz93a4h/image/upload/v1683125331/I_ching%20_trigramas/s-l500__1_-removebg-preview_lfsw3k.png"
    let moneda1 = `<div class="coin1 coins"> <img src="${coin1==2? imageCoin2 : imageCoin3}"></div>`
    let moneda2 = `<div class="coin2 coins"><img src="${coin2==2? imageCoin2 : imageCoin3}"></div>`
    let moneda3 = `<div class="coin3 coins"><img src="${coin3==2? imageCoin2 : imageCoin3}"></div>`
    coinContainer.innerHTML += moneda1;
    setTimeout(() => {
        coinContainer.innerHTML += moneda2;
      }, "750");
      setTimeout(() => {
        coinContainer.innerHTML += moneda3;
        buttonCoins.removeAttribute('disabled')
        printLines(sumatoria)
      }, "1500");
}