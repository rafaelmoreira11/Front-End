let nome = prompt("Qual o seu nome?");
let idade = prompt("Qual sua idade?");
let linguagem = prompt("Qual a linguagem que você estuda?");
alert(`Olá ${nome}, você tem ${idade} anos e está estudando ${linguagem}`);
let Texto = prompt(`Está gostando de estudar ${linguagem}? {S/N}`);

if (Texto == "S") {
  alert("Muito bom! Continue dando o melhor nos estudos!");
}
if (Texto == "N") {
  alert("Ahh que pena... Já tentou aprender outra linguagem?");
}
