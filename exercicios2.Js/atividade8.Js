// Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.
const numOne = 55;
const numTwo = 60;
const numThree = 67;
const numFour = 70;

if (numOne%2 !== 0 && numTwo%2 !== 0 && numThree%2 !== o && numFour%2 !== 0) {
    console.log('Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES')
    
}
else if (numOne%2 === 0 && numTwo%2 === 0 && numThree%2 === o && numFour%2 === 0) {
console.log('Todos os números são pares => TODOS OS NÚMEROS SÃO PARES')}

else {
    console.log(" Há números pares e ímpares.")
}