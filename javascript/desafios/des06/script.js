function converter(){
    let celsius = Number(prompt('Digite uma temperatura em ºC(Celsius)'))
    let fahrenheit = (1.8*celsius)+32
    let kelvin = celsius + 273.15
    let c = celsius.toFixed(1).replace('.',',')
    let f = fahrenheit.toFixed(2).replace('.',',')
    let k = kelvin.toFixed(2).replace('.',',')
    let res = document.querySelector('div#res')
    res.innerHTML = `<h2>A temperatura de ${c}ºC, corresponde a...</h2>`
    res.innerHTML += `<p>${f}ºF (Fahrenheit)</p>`
    res.innerHTML += `<p>${k}ºK (Kelvin)</p>`
}