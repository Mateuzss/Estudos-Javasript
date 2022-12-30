// controle de fluxo - condicionais switch case 

const temperature = 52
switch (temperature) {
    case 36 :
        console.log(' a pessoa esta saudavel')
        break;

        case 39 :
        console.log(' a pessoa esta febril')
        break;

        case 40 :
        console.log(' a pessoa esta abaixo da temperatura ')
        break;

        case 45 :
        console.log(' a pessoa esta em convulção')
        break;

        
        case 50 :
        console.log(' a pessoa esta em chamas')
        break;

        
    default: 
    console.log(' temperatura não encontrada ')
        break;
}