// Faça um programa onde colocamos dois numeros ímpares e o programa imprima o resto da divisão. Ex: 7/3 deve imprimir: 1, 25/5 deve imprimir: 0.Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é maior que o segundo. Ex: 2 e 5. Imprime: false.Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é menor que o segundo. Ex: 2 e 5. Imprime: true.

const a = 7
const b = 3
const quo =  Math.floor(a / b)
const rem = a%b

console.log('Quotiente = ',quo,'Restante = ',rem);

console.log( 3 > 5, 3 < 5 )