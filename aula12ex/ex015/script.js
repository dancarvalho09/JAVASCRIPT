
function verificar() {
    var data = new Date() 
    var ano_atual = data.getFullYear()
    form_ano = window.document.getElementById('txtano') /* formulário do ano*/
    var resultado = document.querySelector('div#resultado')

    if (form_ano.value.length == 0 || form_ano.value > ano_atual) {
        window.alert('Verifique os dados e tente novamente!')
    } else{
        var form_sexo = window.document.getElementsByName('radsexo')
        var idade = ano_atual - Number(form_ano.value)
        var genero = ""
        var img = window.document.createElement('img') 
        img.setAttribute('id', 'foto') /* corresponde a <img id='foto'> no HTML*/ 


        if (form_sexo[0].checked) {  /*se o sexo masculino for selecionado*/
            genero = 'Homem'

            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'bebe-m.jpg') //bebe - criança

            } else if (idade < 21) { 
                img.setAttribute('src', 'jovem-m.jpg') //jovem

            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-m.jpg') //adulto

            } else {
                img.setAttribute('src', 'idoso-m.jpg') //idoso
            }
            

            
        } else {
            genero = 'Mulher'

            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'bebe-f.jpg') //bebe - criança

            } else if (idade < 21) { 
                img.setAttribute('src', 'jovem-f.jpg') //jovem

            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-f.jpg') //adulta

            } else {
                img.setAttribute('src', 'idoso-f.jpg') //idosa
            }
        }
        //resultado.style.textAling = 'center' -> centralizando em JS
        resultado.innerHTML = `${genero} com ${idade} anos.`
        resultado.appendChild(img) /* subir as imagens*/
        
        
    }












}