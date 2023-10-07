let nomeHeroi = "SuperMands"
let nivelXP = 10500

if(nivelXP <= 1000){
    console.log("O Herói " + nomeHeroi + " está no nível Ferro")
}else if(nivelXP > 1000 && nivelXP<= 2000){
    console.log("O Herói " + nomeHeroi + " está no nível Bronze")
}else if(nivelXP > 2000 && nivelXP <= 5000){
    console.log("O Herói " + nomeHeroi + " está no nível Prata")
}else if(nivelXP > 5000 && nivelXP <= 7000){
    console.log("O Herói " + nomeHeroi + " está no nível Ouro")
}else if(nivelXP > 7000 && nivelXP <= 8000){
    console.log("O Herói " + nomeHeroi + " está no nível Platina")
}else if(nivelXP > 8000 && nivelXP <= 9000){
    console.log("O Herói " + nomeHeroi + " está no nível Ascendente")
}else if(nivelXP > 9000 && nivelXP <= 10000){
    console.log("O Herói " + nomeHeroi + " está no nível Imortal")
}else{
    console.log("O Herói " + nomeHeroi + " está no nível Radiante")
}