// Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO


const object = {
    name: "mateus",
    age: 20,
    sex: 'male',
    citizenship: 'brasilian',
    height: 1.8,
    address: {
        street: 9,
        house: 10,
        state: "goias",
    }

}

if (object.citizenship === 'brasilian') {
    console.log("Brasileiro");
}
else {
console.log("nacionalidade não encontrada");
}

    