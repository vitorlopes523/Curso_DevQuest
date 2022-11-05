/*
    function nomeDaFuncao() {
        bloco de execução
    }

    nomeDaFuncao()


    function nomeDaFuncao(parametro1, parametro2) {
        bloco de execução
    }

    nomeDaFuncao(parametro1, parametro2)
*/

function incentivarQuester(nomeQuester = 'Quester') {
  alert('Muito bem ' + nomeQuester + ', você chegou ao js, continue assim!')
}

incentivarQuester('Vitor')

function soma(numero1, numero2) {
    return numero1 + numero2
}

let resultadoDaSoma = soma(1, 3)
console.log(resultadoDaSoma)

resultadoDaSoma = soma(resultadoDaSoma, 10)
console.log(resultadoDaSoma)

resultadoDaSoma = soma(resultadoDaSoma, 1000)
console.log(resultadoDaSoma)