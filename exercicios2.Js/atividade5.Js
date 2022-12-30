
//  Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

const object1 = [{
    name: "Mateus",
    age: 18,
    work: "developer",
    nationality: "Brasilian",
}]




if (object1.age >= 18 && object1.nationality === "Brasilian") {
    console.log("você passou!")

}
else {
    console.log("você não passou ")
}
switch (2) {
    case 1:
        console.log("você pode melhorar")
        break;
    case 2:
        console.log("continue tentanto")
        break;
    case 3:
        console.log("você uma hora consegue")
        break;
    case 4:
        console.log("você um dia vai conseguir")
        break;
    case 5:
        console.log("mediano")
        break;
        case6:
        console.log("mais ou menos")

        break;
        case7:
        console.log("podia ter se esforçado mais")
        break;
    case 8:
        console.log("quase")
        break;
    case 9:
        console.log("na proxima ganha")
        break;
    case 10:
console.log("você passou")
        break;

    default:
        break;
}