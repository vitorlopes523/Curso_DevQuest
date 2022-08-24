/*
      == ---- igual--- a==b---- verdadeiro se a for igual a b
      === ---- idêntico---- a===b ---- verdadeiro se a for idêntico a b
      !=---- diferente---a!=b---- verdadeiro se a for difrente de b
      !== ---- não idêntico--- a!==b---- verdadeiro se a não for idêntico a b
      < ----menor--- a < b---verdadeiro se a for menor que b
      > ----maior---- a > b---- verdadeiro se a for maior que b.
      <= ----menor ou igual--- a <= b --- verdadeiro se a for menor ou igual a b
      >=---- maior ou igual--- a >= b ---- verdadeiro se a for maior ou igual a b.
      

*/

// const a = "3"
// const b = 3

// console.log(a!==b)


// &&-- e--- compara dois ou mais valores, se um for falso o resultado é falso, se ambos forem verdadeiros o resultado é verdadeiro.
const a = 3
const b = 3

console.log(a==b && a>=b)

// || ---or--- compara dois ou mais valores, basta uma condição ser verdadeira para o resultado ser verdadero, para que seja falso, todas as condições devem ser falsas.
console.log(a === b || a < b)

// !----NOT--- esse operador inverte a expressão, o que for verdadeiro passa a ser falso, e o que for falso, passa a ser verdadeiro.
console.log(!(a === b)) //false
console.log(!(a > b)) //true