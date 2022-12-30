// Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.
let NumberOne = 7

if (NumberOne % 2 == 0) {
    console.log(" o número e par")
}
else if (NumberOne % 2 == 1) {
    console.log(" o número e impar")
     for (let i = 1; i < 10; i++) {

    if (NumberOne % i === 0) {
        console.log("Ele é ÍMPAR, mas NÃO É PRIMO!! ");
        break;
    }
    else {
        if (i === NumberOne - 1)
            console.log("Ele é um número PRIMO!!")
    }
}
}
