let operacao = prompt(
  "Escolha a operação que deseja fazer : (1- Soma / 2- Subtração / 3- Multiplicação / 4- Divisão / 5- Sair)"
);

function somar() {
  let inputnum1 = prompt("Digite o primeiro número");
  let inputnum2 = prompt("Digite o segundo número");
  let num1 = Number(inputnum1);
  let num2 = Number(inputnum2);
  let soma = num1 + num2;
  alert(`A soma dos valores ${num1} e ${num2} é : ${soma}`);
}
function subtrair() {
  let num1 = prompt("Digite o primeiro número");
  let num2 = prompt("Digite o segundo número");
  let sub = num1 - num2;
  alert(`A subtração dos valores ${num1} e ${num2} é : ${sub}`);
}
function dividir() {
  let num1 = prompt("Digite o primeiro número");
  let num2 = prompt("Digite o segundo número");
  let div = num1 / num2;
  alert(`A divisão dos valores ${num1} e ${num2} é : ${div}`);
}
function multiplicar() {
  let num1 = prompt("Digite o primeiro número");
  let num2 = prompt("Digite o segundo número");
  let multi = num1 * num2;
  alert(`A multiplicação dos valores ${num1} e ${num2} é : ${multi}`);
}

switch (operacao) {
  case "1":
    somar();
    break;
  case "2":
    subtrair();
    break;
  case "3":
    multiplicar();
    break;
  case "4":
    dividir();
    break;
  case "5":
    alert("Até a próxima!");
    break;
}
switch (operacao == "2") {
}
