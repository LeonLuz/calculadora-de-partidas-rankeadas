// Calculadora de Partidas Rankeadas

let winRate = calculateWinRate(110, 25)
let level = defineLevel()

function calculateWinRate(victory, defeat){
    return victory - defeat
}

function defineLevel(){
    if(winRate <= 10){
        return "Ferro"
    }
    else if(winRate <= 20){
        return "Bronze"
    }
    else if(winRate <= 50){
        return "Prata"
    }
    else if(winRate <= 80){
        return "Ouro"
    }
    else if(winRate <= 90){
        return "Diamante"
    }
    else if(winRate <= 100){
        return "Lendário"
    }
    else{
        return "Imortal" 
    }
}

console.log(`O Herói tem saldo de ${winRate} está no nível de ${level}`)