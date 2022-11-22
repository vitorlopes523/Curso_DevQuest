/*## Passos:

1. Pegar o elemento de  **botão** para ser adicionado o **evento de clique** nele.
2. Pegar o elemento de **id do conselho** 
3. Pegar o elemento de **descrição do conselho**
4. Após conseguirmos os elementos do html, é necessário a criação da **função responsável por pegar os dados da API**. A melhor forma de se consumir a api é usando **async await**. Caso não tenha visto a aula, sugiro que assista novamente. Nas referências ficará um link com exemplos.
5. Dentro da função, após pegarmos os dados da API, é necessário atualizar o conteúdo do id e descrição do conselho que colocamos em uma variável usando o **innerHTML**.
6. Por fim, basta chamar a função criada.
7. Atribuir a função que criamos para ser executada no evento do clique do botão ou se preferir, criar o escopo da função dentro do listener.*/

//MINHA RESOLUÇÃO
const botaoMostrarNovoConselho = document.querySelector(".btn")
const idConselhos = document.querySelector(".advice-id")
const conselhos = document.querySelector(".frases")

botaoMostrarNovoConselho.addEventListener('click', () => {
  mostrarConselhosAleatorios()
})

async function mostrarConselhosAleatorios() {
  const url = "https://api.adviceslip.com/advice"
  const resposta = await fetch(url)
  const conselho = await resposta.json()

  idConselhos.innerHTML = `Advice # ${conselho.slip.id}`
  conselhos.innerHTML = `"${conselho.slip.advice}"`
}


//RESOLUÇÃO DO DESAFIO

// const adviceUpdateButton = document.querySelector(".advice-update");
// const adviceNumber = document.querySelector(".advice-id");
// const adviceDescription = document.querySelector(".advice-description");

// async function getAdvice() {
//     const response = await fetch("https://api.adviceslip.com/advice");
//     const adviceContent = await response.json();
//     const adviceId = `Advice #${adviceContent.slip.id}`;
//     const adviceText = `"${adviceContent.slip.advice}"`;

//     adviceNumber.innerHTML = adviceId;
//     adviceDescription.innerHTML = adviceText;
// }

// adviceUpdateButton.addEventListener("click", getAdvice);

// getAdvice();


