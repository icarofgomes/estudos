function converter(){
    celsius = Number(prompt('Digite uma temperatura em ºC(Celsius)'))
    fahrenheit = (1.8*celsius)+32
    kelvin = celsius + 273.15
    c = celsius.toFixed(1).replace('.',',')
    f = fahrenheit.toFixed(2).replace('.',',')
    k = kelvin.toFixed(2).replace('.',',')
    res = document.querySelector('div#res')
    res.innerHTML = `<h2>A temperatura de ${c}ºC, corresponde a...</h2>`
    res.innerHTML += `<p>${f}ºF (Fahrenheit)</p>`
    res.innerHTML += `<p>${k}ºK (Kelvin)</p>`
}