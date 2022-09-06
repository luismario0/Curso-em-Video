function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=  0 && hora < 12) {
        //Bom Dia
        img.src = './modelo/manha.jpg'
        
    }else if(hora >= 12 && hora < 18){
        //Boa tarde
        img.src = './modelo/tarde.png'
    }else{
        //Boa Noite
        img.src= './modelo/noite.png'
    }
}