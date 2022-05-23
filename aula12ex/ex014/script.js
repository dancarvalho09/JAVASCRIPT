
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora}:${minutos}h.`

    /*TESTANDO...
    var hora = 10

    msg.innerHTML = `Agora são ${hora} horas.` */

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'foto-manha.png'
        document.body.style.backgroundColor = '#f7ea9c'

    } else if(hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'foto-tarde.png'
        document.body.style.backgroundColor = '#e77401'
        
    } else {
        //BOA NOITE
        img.src = 'foto-noite.png'
        document.body.style.backgroundColor = '#4b3e58'
    }
}
