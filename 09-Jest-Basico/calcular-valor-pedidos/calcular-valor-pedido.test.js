const calcularValorPedido = require('./calcular-valor-pedido')

it('não deve cobrar valor de frete quando o valor dos produtos for superior a 500', () => {
  //AAA - 3 passos de criação de um teste

  //ARRANG -ARRUMAR - O OBJETO DE TESTE
  const meuPedido = {
    itens: [
      { nome: 'Arco encantado', valor: 2000},
      { nome: 'Entrega', valor: 100, entrega: true }
    ]
  }

  //ACT - AÇÃO - O QUE VAI SER TESTADO
  const resultado = calcularValorPedido(meuPedido)

  //ASSERT - ASSERÇÃO - QUAL O RESULTADO ESPERADO
  expect(resultado).toBe(2000)
})

it('deve cobrar valor de frete quando o valor dos produtos for menor que 500', () => {
  //AAA - 3 passos de criação de um teste

  //ARRANG -ARRUMAR - O OBJETO DE TESTE
  const meuPedido = {
    itens: [
      { nome: 'Sanduiche', valor: 50},
      { nome: 'Entrega', valor: 100, entrega: true }
    ]
  }

  //ACT - AÇÃO - O QUE VAI SER TESTADO
  const resultado = calcularValorPedido(meuPedido)

  //ASSERT - ASSERÇÃO - QUAL O RESULTADO ESPERADO
  expect(resultado).toBe(150)
})

it('deve cobrar valor de frete quando o valor dos produtos for EXATAMENTE 500', () => {
  
  const meuPedido = {
    itens: [
      { nome: 'Sanduiche bem caro', valor: 500},
      { nome: 'Entrega', valor: 100, entrega: true }
    ]
  }

  const resultado = calcularValorPedido(meuPedido)
  
  expect(resultado).toBe(600)
})

it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja RS', () => {

  const pedidoComEstadoRS = {
    estado: 'RS',
    itens: [
      { nome: 'Sanduiche bem caro', valor: 500},
      { nome: 'Entrega', valor: 100, entrega: true }
    ]
  }

  const resultado = calcularValorPedido(pedidoComEstadoRS)

  expect(resultado).toBe(620)
})

it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SC', () => {

  const pedidoComEstadoSC = {
    estado: 'SC',
    itens: [
      { nome: 'Sanduiche bem caro', valor: 500},
      { nome: 'Entrega', valor: 100, entrega: true }
    ]
  }

  const resultado = calcularValorPedido(pedidoComEstadoSC)

  expect(resultado).toBe(620)
})

it('não deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SP', () => {

  const pedidoComEstadoSP = {
    estado: 'SP',
    itens: [
      { nome: 'Sanduiche bem caro', valor: 500},
      { nome: 'Entrega', valor: 100, entrega: true }
    ]
  }

  const resultado = calcularValorPedido(pedidoComEstadoSP)

  expect(resultado).toBe(600)
})
