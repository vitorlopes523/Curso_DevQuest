const pessoas = ['Ricardo', 'Roberto', 'Raphael']
console.log(...pessoas)

// CONCATENAR DOIS ARRAYS

// let pessoas1 = ['Ricardo', 'Roberto', 'Raphael']
// let pessoas2 = ['Pedro', 'João', 'Paulo']

// pessoas1 = pessoas1.concat(pessoas2)

// pessoas1 = [...pessoas1, ...pessoas]
// console.log(pessoas1)

// CLONAR OBJETO

let pessoa1 = { nome: 'Ricardo', idade: 32 }  

const objetoClonado = { ...pessoa1 }
console.log(objetoClonado)