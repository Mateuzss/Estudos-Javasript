// Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const object1 = {name:"João"}, object2 = {name:"Maria"}

console.log(object1 == object1, object2 == object1)


const object3 = {firstName:"João", seccondName:"Maria"}
console.log(object3.firstName == object3.seccondName, object3.seccondName == object3.seccondName)