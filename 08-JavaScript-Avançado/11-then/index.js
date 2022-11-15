let feverAgua = (chaleiraEstaNoFogo, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
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
let passarCafe = () => console.log('passando café')

feverAgua(chaleiraEstaNoFogo, fogaoEstaLigado).then(passarCafe)
console.log('fazendo café')