const butaoEnviar = document.querySelector(".btn-enviar")
const camposDoFormulario = document.querySelectorAll('.campos')

butaoEnviar.addEventListener('click', () => {
  camposDoFormulario.forEach(function(elementos) {
    const elementosDePreencher = elementos.children[0]
    const mensagemDeErro = elementos.children[1]

    if(elementosDePreencher.value !== '') {
      elementosDePreencher.classList.remove('invalido')
      elementosDePreencher.classList.add('valido')
      mensagemDeErro.classList.remove('mostrar')
    }else {
      elementosDePreencher.classList.remove('valido')
      elementosDePreencher.classList.add('invalido')
      mensagemDeErro.classList.add('mostrar')
    }
  })
})

