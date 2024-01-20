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
    let continuar = prompt(
      "O que você quer fazer? (1- Adicionar outras / 2- Remover da lista / 3- Sair)"
    );
    if (continuar == "3") {
      let lista = alert(
        ` Lista de compras : \n Frutas - ${frutas} \n Laticínios - ${laticinios} \n Congelados - ${congelados} \n Doces - ${doces}`
      );
      break;
    }
    if (continuar == "2") {
      let remover = prompt(
        `Qual comida deseja remover? \n Frutas - ${frutas} \n Laticínios - ${laticinios} \n Congelados - ${congelados} \n Doces - ${doces}`
      );

      //remove as frutas
      if (frutas.includes(remover)) {
        let indice = frutas.indexOf(remover);
        frutas.splice(indice);
        alert(
          `Lista de compras \n Frutas - ${frutas} \n Laticínios - ${laticinios} \n Congelados - ${congelados} \n Doces - ${doces}`
        );
        break;
      }

      //remove os laticínios
      if (laticinios.includes(remover)) {
        let indice = laticinios.indexOf(remover);
        laticinios.splice(indice);
        alert(
          `Lista de compras \n Frutas - ${frutas} \n Laticínios - ${laticinios} \n Congelados - ${congelados} \n Doces - ${doces}`
        );
        break;
      }

      //remove os congelados
      if (congelados.includes(remover)) {
        let indice = congelados.indexOf(remover);
        congelados.splice(indice);
        alert(
          `Lista de compras \n Frutas - ${frutas} \n Laticínios - ${laticinios} \n Congelados - ${congelados} \n Doces - ${doces}`
        );
        break;
      }

      //remove os doces
      if (doces.includes(remover)) {
        let indice = doces.indexOf(remover);
        doces.splice(indice);
        alert(
          `Lista de compras \n Frutas - ${frutas} \n Laticínios - ${laticinios} \n Congelados - ${congelados} \n Doces - ${doces}`
        );
        break;
      }
    }
  }
}

if (op == "1") {
  novaComida();
} else if (op == "2") {
  alert("Até a proxima");
}
