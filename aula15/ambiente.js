let num = [5, 8, 2, 9, 3]

console.log(num)
console.log(`\nO vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)

num.sort()
console.log(`\nO vetor ordenado ficou: ${num}`)
console.log(`Agora o primeiro valor do vetor é ${num[0]}.`)

num.push(1) //adicionado no fim do vetor onde não há o sort envolvido.
console.log(`\nAgora esse é nosso novo vetor: ${num}`)
console.log(`Agora temos ${num.length} posições.`)
num.sort()
console.log(`Ordenado fica: ${num}`)