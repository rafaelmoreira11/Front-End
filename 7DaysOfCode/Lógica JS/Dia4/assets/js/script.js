let op = prompt("Tente adivinhar o número");
let num = Math.floor(Math.random() * 10 + 1);
let chances = 2;

if (op == num) {
  alert("Uau acertou na mosca!");
} else {
  alert("Ahh que pena, você errou!");
}

while (op != num && chances > 0) {
  prompt(`Continue tentando, ainda restam ${chances} chances`);
  chances--;
}
alert(`Suas chances acabaram, o número era ${num}`);
