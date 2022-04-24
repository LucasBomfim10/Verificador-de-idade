function verificar() {
    var data=new Date()
    var ano= data.getFullYear()
    var fano= document.getElementById('txtano')
    var res=document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) >ano)
        {
            window.alert('Verifique os dados e tente novamente')

}
else {
    var fsex =document.getElementsByName('radsex')
    var idade =ano - Number(fano.value)
    var genero = ''
    var img= document.createElement('img')
    img.setAttribute('id','foto')
    if(fsex[0].checked){
        genero = 'Homem'
        if(idade>=0 && idade <=15) {
            //criança
            img.setAttribute('src','criançam.png')
        }
        else if(idade<=40){
            //adulto
            img.setAttribute('src','adultom.png')
    
        }
        else if(idade>40){
            //idoso
            img.setAttribute('src','idosom.png')
    
        }
    } else if (fsex[1].checked){
        genero = 'mulher'
    if(idade>=0 && idade <15) {
        //criança
        img.setAttribute('src','criançaf.png')
    
    }
        else if(idade<=40){
        //adulto
        img.setAttribute('src','adultaf.png')
    
    }
        else if(idade>40){
        //idoso
        img.setAttribute('src','idosof.png')
    
    }
}
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
 }
}