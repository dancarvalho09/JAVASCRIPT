let num = document.querySelector('#form_num')
let lista = document.querySelector('#form_lista')
let resultado = document.querySelector('#resultado')
let valores = []




function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { // Traduzindo: se (o nº no form_num (for um nº válido) E NÃO (estiver na lista))
        

    }  else {
        window.alert ('Valor inválido ou já adicionado na lista.')
    }

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