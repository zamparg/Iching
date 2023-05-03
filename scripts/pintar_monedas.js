function printCoin(coin1,coin2,coin3) {
    let moneda = ""
    let imageCoin2 = "https://images-ext-2.discordapp.net/external/bcIVqpGMPe8ULLm0c9kzm18NcsMgE13rnFFidglVpmQ/https/i.ebayimg.com/images/g/VO4AAOSwaEZcY44h/s-l500.jpg?width=412&height=427"
    let imageCoin3 = "https://images-ext-2.discordapp.net/external/OJ7GgP0lQps-XjWZ9GYLr0u62pebAl3onjhwtRVJAdU/https/i.ebayimg.com/images/g/F9kAAOSw9GdcY44Y/s-l500.jpg?width=430&height=427"
    moneda += `<div class="coin1">${coin1} ${coin1==2? imageCoin2 : imageCoin3}</div>
    <div class="coin2">${coin2} ${coin2==2? imageCoin2 : imageCoin3}</div>
    <div class="coin3">${coin3} ${coin3==2? imageCoin2 : imageCoin3}</div>`;
    coinContainer.innerHTML = moneda;
}