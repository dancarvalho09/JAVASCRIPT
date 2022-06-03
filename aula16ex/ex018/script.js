let num = document.querySelector('#form_num')
let lista = document.querySelector('#form_lista')
let resultado = document.querySelector('#resultado')
let valores = []


function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { // Traduzindo: se (o nº no form_num (for um nº válido) E NÃO (estiver na lista))
        valores.push(Number(num.value))
        
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        resultado.innerHTML = ''

    }  else {
        window.alert ('Valor inválido ou já adicionado na lista.')
    }
    num.value = ''
    num.focus()
}


function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
        
    } else {
        return false
    }
}


function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true

    } else {
        return false
    }
}


function finalizar() {
    if (valores.length == 0) {
        window.alert ('Adicione valores antes de finalizar!')

    } else {
        let total_elementos = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
           
            if (valores[pos] > maior) {
                maior = valores[pos]
            } 
            if (valores [pos] < menor) {
                menor = valores[pos]
            }
            
            soma += valores[pos]
            media = soma / total_elementos
        }
        

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${total_elementos} números cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        resultado.innerHTML += `<p>A média de todos os valores é ${media.toFixed(1)}</p>`
    }
}