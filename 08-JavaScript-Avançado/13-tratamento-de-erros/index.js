let feverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {

      if(typeof chaleiraEstaNoFogao != 'boolean') throw "Somente o tipo booleano é aceito"

      if(chaleiraEstaNoFogao && fogaoEstaLigado) {
        console.log('Passo 1 finalizado: Água foi fervida')
        resolve()
      }else {
        console.log('é necessário colocar a chaleira com água e ligar o fogão senão teu cafezinho não vai ficar pronto nunca')
        reject()
      }
  })
}

let passarOCafe = (aguaFervida) => {
  return new Promise((resolve) => {
      console.log('Passo 2 finalizado: Café foi passado')
      resolve(true)
  })
}

let tomarCafe = (cafePassado) => {
  return new Promise((resolve) => {
      console.log('Passo 3 finalizado: Terminei de tomar o café')
      resolve(true)
  })
}

let lavarXicara = (cafeTomado) => {
  return new Promise((resolve) => {
      console.log('Passo 4 finalizado: Terminei de lavar a xícara')
      resolve(true)
  })
}

let chaleiraEstaNoFogao = 'teste'
let fogaoEstaLigado = true

async function iniciarProcessoDeFazerCafe() {
  try {
      const aguaFervida = await feverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
      const cafePassado = await passarOCafe(aguaFervida)
      const cafeTomado = await tomarCafe(cafePassado)
      const xicaraLavada = await lavarXicara(cafeTomado)
  }catch(err) {
    console.log(err)
  }finally {
    console.log('Finalizado o ritual do café, bora trabalhar') 
  }
}

iniciarProcessoDeFazerCafe()
   