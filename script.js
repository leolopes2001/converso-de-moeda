
let button = document.getElementById('button')
let img2 = document.getElementById('img2')
let p2 = document.getElementById('paragraph2')
let p3 = document.getElementById('paragraph3')
let p4 = document.getElementById('paragraph4')

async function converted(a, b) {
    let currencySite = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (answer) {
        return answer.json()
    })

    let dolar = currencySite.USDBRL.high
    let euro = currencySite.EURBRL.high

    if (b === "US$ Dólar americano") {
        let converted = a / dolar
        p2.innerHTML = a.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        p4.innerHTML = converted.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }
    if (b === "€ Euro") {
        let converted = a / euro
        p4.innerHTML = converted.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
    }
}

function currencyExchange() {
    let currencyInReal = Number(document.getElementById('currencyInReal').value)
    let currency = document.getElementById('currency').value

    p2.innerHTML = currencyInReal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

    if (currency === "US$ Dólar americano") {
        img2.src = "usa.png"
        p3.innerHTML = "Dolar"
    }
    if (currency === "€ Euro") {
        p3.innerHTML = "Euro"
        img2.src = "euro.png"
    }
    converted(currencyInReal, currency)
}
function convert() {
    let currencyInReal = Number(document.getElementById('currencyInReal').value)
    let currency = document.getElementById('currency').value

    converted(currencyInReal, currency)

    p2.innerHTML = currencyInReal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

button.addEventListener('click', convert)
currency.addEventListener('change', currencyExchange)