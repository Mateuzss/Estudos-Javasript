// Faça um programa onde toda vez que ele rodar, coloca na tela um número aleatório entre 1 e 100.



const winner = {
    name: "mateus",
    age: 20,
    sex: 'male',
    height: 1.8,
    address: {
        street: 9,
        house: 10,
        state: "goias",
    }

}


console.log( 'O ganhador foi o número' ,Math.floor((Math.random(1) * 100)),winner )

