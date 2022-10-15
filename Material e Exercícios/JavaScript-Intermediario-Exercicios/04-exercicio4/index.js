/* 
    Dica: Começar pensando no objetivo do que precisa fazer e no passo a passo pra chegar lá é essencial.
    
    NÂO SAIA TENTANDO ESCREVER CÓDIGO! Antes disso você precisa saber O QUE precisa ser feito e só depois COMO fazer.

    Objetivo do exercício: Ao preencher alguma informação nos inputs, deve ser verificado se estão vazios ou não. 
													 Caso tiver algum valor, será adicionada a borda verde. Se não tiver, é removida a borda.

        Passo 1 - Pegar todos os inputs que tenham a mesma classe.

        Passo 2 - Dar um jeito de percorrer cada input.

        Passo 3 - Quando o usuário preencher algo, precisamos disparar a ação para verificar se o input foi alterado.
			
				Passo 4 - Realizar a verificação se o valor do input é diferente de vazio.

				Passo 5 - Se o input tiver alguma informação, adicionamos a classe de campo-preenchido que vai dar a borda verde ao input.

				Passo 6 - Se o input estiver vazio, removemos a classe campo-preenchido.
*/

// let inputs = document.querySelectorAll('.input-text')

// let inputUm = inputs[0].addEventListener('change', () => {

//   let inputValidacao = inputs[0].value
//   console.log(inputValidacao)
  
//   if (inputValidacao !== ''){
//     inputs[0].classList.add('border-validacao')
//   }else {
//     inputs[0].classList.remove('border-validacao')
//   }

// })

// let inputDois = inputs[1].addEventListener('change', () => {

//   let inputValidacao = inputs[1].value
//   console.log(inputValidacao)
  
//   if (inputValidacao !== ''){
//     inputs[1].classList.add('border-validacao')
//   }else {
//     inputs[1].classList.remove('border-validacao')
//   }

// })


// Passo 1 - Pegar todos os inputs que tenham a mesma classe com o querySelectorAll.
// Passo 2 - Dar um jeito de percorrer cada input - vamos utilizar o laço de repetição forEach para percorrer cada input.
// Passo 3 - Quando o usuário preencher algo, precisamos disparar a ação para verificar se o input foi alterado.
// Passo 4 - Realizar a verificação se o valor do input é diferente de vazio.
// Passo 5 - Se o input tiver alguma informação, adicionamos a classe de campo-preenchido que vai dar a borda verde ao input.
// Passo 6 - Se o input estiver vazio, removemos a classe campo-preenchido.

const inputText = document.querySelectorAll(".input-text")

inputText.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value !== '') {
            input.classList.add('border-validacao')
        } else {
            input.classList.remove('border-validacao')
        }
    });
});


