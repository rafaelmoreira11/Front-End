let op = prompt("Quer adicionar uma comida na lista?? (1- Sim / 2- Não)");
let Comidas = "";
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

function novaComida() {
  for (op; op == "1"; op) {
    let comida = prompt("Qual comida deseja inserir ?");
    let categoria = prompt(
      "Em qual categoria ela se encaixa? (1- frutas / 2- laticinios / 3- congelados / 4- doces) "
    );
    if (categoria == "1") {
      frutas.push(comida);
    }
    if (categoria == "2") {
      laticinios.push(comida);
    }
    if (categoria == "3") {
      congelados.push(comida);
    }
    if (categoria == "4") {
      doces.push(comida);
    }
    let continuar = prompt("Quer adicionar mais comidas? (1- Sim / 2- Não)");
    if (continuar == "2") {
      alert(
        ` Lista de compras : \n Frutas - ${frutas} \n Laticínios - ${laticinios} \n Congelados - ${congelados} \n Doces - ${doces}`
      );
      break;
    }
  }
}

if (op == "1") {
  novaComida();
} else if (op == "2") {
  alert("Até a proxima");
}
