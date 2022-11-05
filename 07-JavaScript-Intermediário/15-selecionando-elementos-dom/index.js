console.log(document)//busca o html completo

let p = document.getElementById('paragrafo1')//busca um elemento pelo id

console.log(p)

let inputPorClasse = document.getElementsByClassName('tag-de-input')//busca elementos pela classe

console.log(inputPorClasse[1])

let inputPorTag = document.getElementsByTagName('input')//busca elementos pela tag

console.log(inputPorTag[0])

let inputporName = document.querySelectorAll("input[name='email']")//busca vários elementos com certa propriedade igual.

console.log(inputporName)