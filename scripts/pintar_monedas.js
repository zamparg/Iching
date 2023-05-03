function printCoin(coin1,coin2,coin3) {
    coinContainer.innerHTML =``
    let imageCoin2 = "https://images-ext-2.discordapp.net/external/bcIVqpGMPe8ULLm0c9kzm18NcsMgE13rnFFidglVpmQ/https/i.ebayimg.com/images/g/VO4AAOSwaEZcY44h/s-l500.jpg?width=412&height=427"
    let imageCoin3 = "https://images-ext-2.discordapp.net/external/OJ7GgP0lQps-XjWZ9GYLr0u62pebAl3onjhwtRVJAdU/https/i.ebayimg.com/images/g/F9kAAOSw9GdcY44Y/s-l500.jpg?width=430&height=427"
    let moneda1 = `<div class="coin1"> <img src="${coin1==2? imageCoin2 : imageCoin3}"></div>`
    let moneda2 = `<div class="coin2"><img src="${coin2==2? imageCoin2 : imageCoin3}"></div>`
    let moneda3 = `<div class="coin3"><img src="${coin3==2? imageCoin2 : imageCoin3}"> </div>`
    coinContainer.innerHTML += moneda1;
    setTimeout(() => {
        coinContainer.innerHTML += moneda2;
      }, "750");
      setTimeout(() => {
        coinContainer.innerHTML += moneda3;
      }, "1500");
}