let frutas = ['banana', 'maçã', 'laranja', 'pêra']
// let frutasTamanho = frutas.length

// for(let i = 0; i < frutasTamanho; i++) {
//   console.log('Fruta: ' + frutas[i])
// }

// frutas.forEach(function(item, index, array) {
//   console.log('Fruta: ' + item)
// })

//MÉTODOS ARRAY

frutas.push('manga')//adiciona um elemento na ultima posição do array
frutas.pop()//tira o ultimo elemento do array
frutas.shift()//retira o primeiro elemento do array
frutas.unshift('goiaba')//adiciona um elemento no começo do array

console.log(frutas)

let posicao = frutas.indexOf('laranja')//mostra a posição de um item dentro do array
console.log(posicao)