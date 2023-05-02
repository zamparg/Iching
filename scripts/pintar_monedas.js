let moneda = ""
function printCoin(coin) {
    let imageCoin2 = 2 // imagenes monedas
    let imageCoin3 = 3
    moneda += `<div class="coin1">${coin} ${coin==imageCoin2? imageCoin2 : imageCoin3}</div>
    <div class="coin2">${coin} ${coin==imageCoin2? imageCoin2 : imageCoin3}</div>
    <div class="coin3">${coin} ${coin==imageCoin2? imageCoin2 : imageCoin3}</div>`;
}

coinContainer.innerHTML = moneda;

