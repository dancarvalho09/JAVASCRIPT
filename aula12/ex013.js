var agora = new Date()
var dia_semana = agora.getDay()
    /*
        domingo = 0
        segunda = 1
        terça   = 2
        quarta  = 3
        quinta  = 4
        sexta   = 5
        sábado  = 6
    */ 

switch(dia_semana) {
    case 0: 
        console.log('Hoje é Domingo.')
        break
    
    case 1: 
        console.log('Hoje é Segunda.')
        break
    
    case 2: 
        console.log('Hoje é Terça.')
        break

    case 3: 
        console.log('Hoje é Quarta.')
        break

    case 4: 
        console.log('Hoje é Quinta.')
        break

    case 5: 
        console.log('Hoje é Sexta.')
        break

    case 6: 
        console.log('Hoje é Sábado.')
        break
    
    
    default:
        console.log('Dia inválido!')
        break
}   
