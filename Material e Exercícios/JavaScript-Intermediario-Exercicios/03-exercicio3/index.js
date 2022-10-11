// Passo 1 - Pegar o elemento do quadrado azul aqui no JS.
const quadrado = document.querySelector(".quadrado")

// Passo 2 - Quando o usuário clicar no quadrado, precisamos disparar a ação de verificar se a cor do quadrado é a cor azul.
quadrado.addEventListener('click', () => {
		// Passo 3 - Criamos uma varíavel que irá verificar se a classe contém a cor azul.
    const classeAzulExiste = quadrado.classList.contains('azul')

		// Passo 4 - Fazer a verificação utilizando essa varíavel criada, se ela existir, é removida a classe azul do quadrado. 
    if (classeAzulExiste) {
        quadrado.classList.remove("azul")
    } else {
				// Passo 5 - Caso não ter a cor azul, é adicionada a classe e o alerta deve ser disparado.
        quadrado.classList.add("azul")
	      alert("Esse quadrado TEM a classe azul!")
    }
})