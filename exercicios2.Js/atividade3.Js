// Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

switch (Math.ceil(Math.random(1)*10)) {

    case Math.ceil(Math.random(1)*10):

         console.log("Você ganhou!")

        break;

    default:
        console.log ("você Perdeu")
        break;
}
