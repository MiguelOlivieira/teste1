alert("Bem vindo ao jogo do numero secreto");
let numerosecreto = 9
console.log(numerosecreto)
let chute 

while (chute != numerosecreto){
chute = prompt("Digite um numero de 1 a 10");
 if  (chute > numerosecreto) {
  alert("Passou mano, tenta outro")
} else if (chute < numerosecreto) {
    alert("n mano, chuta direito Lucas mds")
}  else {
    alert("Acertou na cagada ne, dá F5 e tenta chutar outros")
}
}