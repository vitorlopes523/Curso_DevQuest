const setaVoltar = document.getElementById("seta-voltar")

const setaAvancar = document.getElementById("seta-avancar")

const imagens = document.querySelectorAll(".slide")

imagemAtual = 0

function esconderImagem() {
  const imagemSelecionada = document.querySelector(".mostrar")
  imagemSelecionada.classList.remove("mostrar")
}

function mostrarImagem() {
  imagens[imagemAtual].classList.add("mostrar")
}

function esconderOuMostrarSeta() {
  const naoEhAPrimeiraImagem = imagemAtual !== 0;
  if(naoEhAPrimeiraImagem) {
    setaVoltar.classList.remove("nao-selecionavel")
  } else {
    setaVoltar.classList.add("nao-selecionavel")
  }

  const chegouNaUltimaImagem = imagemAtual !== 0 && imagens.length -1
  if(chegouNaUltimaImagem) {
    setaAvancar.classList.add("nao-selecionavel")
  } else {
    setaAvancar.classList.remove("nao-selecionavel")
  }
}

setaAvancar.addEventListener('click', () => {
  if(imagemAtual === imagens.length -1) {
    return
  }

  imagemAtual++
  esconderImagem()
  mostrarImagem()
  esconderOuMostrarSeta()
})

setaVoltar.addEventListener('click', () => {
  if(imagemAtual === 0) {
    return
  }

  imagemAtual--
  esconderImagem()
  mostrarImagem()
  esconderOuMostrarSeta()
})
