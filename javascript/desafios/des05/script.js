function converter(){
    metros = Number(prompt('Digite uma distância em metros(m):'))
    m = metros.toFixed(2).replace('.',',')
    km= (metros/1000).toFixed(3).replace('.', ',')
    hm= (metros/100).toFixed(3).replace('.', ',')
    dam = (metros/10).toFixed(3).replace('.', ',')
    dm = (metros*10).toFixed(3).replace('.', ',')
    cm = (metros*100).toFixed(3).replace('.', ',')
    mm = (metros*1000).toFixed(3).replace('.', ',')
    res = document.querySelector('div#res')
    res.innerHTML = `<h2>A distância de ${m} metros corresponde a...</h2>`
    res.innerHTML += `<p>${km} quilômetros (km)</p>`
    res.innerHTML += `<p>${hm} hectômetros (hm)</p>`
    res.innerHTML += `<p>${dam} decâmetros (dam)</p>`
    res.innerHTML += `<p>${dm} decímetros (dm)</p>`
    res.innerHTML += `<p>${cm} centímetros (cm)</p>`
    res.innerHTML += `<p>${mm} milímetros (mm)</p>`
}