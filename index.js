let nomeHeroi = "SuperMands"
let pontosXP = 10500
let nivelHeroi;

if(pontosXP <= 1000){
    nivelHeroi = "Ferro"
}else if(pontosXP > 1000 && pontosXP <= 2000){
    nivelHeroi =  "Bronze"
}else if(pontosXP > 2000 && pontosXP <= 5000){
    nivelHeroi = "Prata"
}else if(pontosXP > 5000 && pontosXP <= 7000){
    nivelHeroi = "Ouro"
}else if(pontosXP > 7000 && pontosXP <= 8000){
    nivelHeroi = "Platina"
}else if(pontosXP > 8000 && pontosXP <= 9000){
    nivelHeroi = "Ascendente"
}else if(pontosXP > 9000 && pontosXP <= 10000){
    nivelHeroi = "Imortal"
}else{
    nivelHeroi = "Radiante"
}

console.log("O Herói " + nomeHeroi + " está no nível " + nivelHeroi)