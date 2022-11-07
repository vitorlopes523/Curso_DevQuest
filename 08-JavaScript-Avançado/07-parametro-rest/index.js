// function (a, b, ...args) {

// }

function incentivarQuester(mensagem, ...nomesQuesters) {
  nomesQuesters.map(nomesQuester => console.log(`${mensagem} ${nomesQuester}`))
}

incentivarQuester('Parabéns por ter chagado ao módulo de JavaScript avançado,', 'João', 'Pedro', 'Vitor', 1, true)