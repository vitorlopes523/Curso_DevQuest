// new Promise((resolve, reject) => {

// })

let feverAgua = (chaleiraEstaNoFogo, fogaoEstaLigado) => {
  new Promise((resolve, reject) => {
      if(chaleiraEstaNoFogo && fogaoEstaLigado) {
        console.log('começando o processo de fever água')
        resolve()
      }else {
        console.log('é necessário logar o fogão e colocar a chaleira no fogão para fever a água')
        reject()
      }
  })
}

let chaleiraEstaNoFogo = true
let fogaoEstaLigado = true
feverAgua(chaleiraEstaNoFogo, fogaoEstaLigado)
console.log('fazendo café')