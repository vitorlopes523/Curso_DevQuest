let videoGame = {
  nome: 'xbox',
  valor: 3000,
  jogos: [
    { nome: 'DragonBall'},
    { nome: 'Fifa 2022'}
  ]
}

let jogo3 = {
  nome: 'Mortal Combat 5'
}

videoGame.jogos.push(jogo3)
console.log(videoGame)//adicionando o objeto jogo3 no array jogos

//----//-----//

let cliente = {
  nome: 'Vitor',
  ultimoPedido: {
    produto: 'xbox',
    valor: 3000,
    jogos: [
      { nome: 'Final Fight'},
      { nome: 'Tumb Rider'}
    ]
  }
}

console.log(cliente.ultimoPedido.jogos[1].nome)