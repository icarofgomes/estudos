function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
       if (fano.value.length == 0 || fano.value > ano || fano.value <= 0) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        }if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade <= 14){
                //criança
                img.setAttribute('src', 'bebe-m.png')
            }else if (idade <= 30){
                //adolescente
                img.setAttribute('src', 'jovem-m.png')
            }else if (idade <=50){
                //adulto
                img.setAttribute('src', 'adulto-m.png')
            }else if (idade > 50){
                //idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        }else if (fsex[1].checked){
            gênero = 'Feminino'
            if (idade <= 14){
                //criança
                img.setAttribute('src', 'bebe-f.png')
            }else if (idade <= 30){
                //adolescente
                img.setAttribute('src', 'jovem-f.png')
            }else if (idade <=50){
                //adulto
                img.setAttribute('src', 'adulto-f.png')
            }else if (idade > 50){
                //idoso
                img.setAttribute('src', 'idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
}
