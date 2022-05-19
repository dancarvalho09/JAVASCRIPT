var agora = new Date()
var hora = agora.getHours() //mostra apenas as horas sem os minutos e segundos.

console.log(`Agora são ${hora} horas.`)

if (hora < 12) {
    console.log('Bom dia!')
}
else if (hora <= 18) {
    console.log('Boa tarde!')
}
else {
    console.log('Boa noite!')
}

