let input_name_city = document.getElementById("name-city");
let select_city = document.getElementById("select-city");
let btn = document.getElementById("btn");
let display = document.getElementById("display");
let bloco1 = document.getElementById("bloco1");
let bloco2 = document.getElementById("bloco2");
let bloco3 = document.getElementById("bloco3");
let bloco4 = document.getElementById("bloco4");
let bloco5 = document.getElementById("bloco5");
let bloco6 = document.getElementById("bloco6");
let bloco7 = document.getElementById("bloco7");
let bloco8 = document.getElementById("bloco8");
let blocos_conteiner = document.getElementById("blocos-conteiner");
let title_blocos = document.getElementById("title-blocos");

function resultado() {
  title_blocos.innerHTML = "Resultado";
  title_blocos.style.fontSize = "32pt";
  title_blocos.style.fontWeight = "600";
}

btn.addEventListener("click", () => {
  let op_select = select_city.options[select_city.selectedIndex].text;
  if (op_select == "Recife - PE" && input_name_city.value == "") {
    resultado();
    bloco1.style.display = "flex";
    bloco2.style.display = "none";
    bloco3.style.display = "none";
    bloco4.style.display = "none";
    bloco5.style.display = "flex";
    bloco6.style.display = "none";
    bloco7.style.display = "none";
    bloco8.style.display = "none";
  } else if (op_select == "Rio de Janeiro - RJ") {
    resultado();
    bloco1.style.display = "none";
    bloco2.style.display = "flex";
    bloco3.style.display = "none";
    bloco4.style.display = "none";
    bloco5.style.display = "none";
    bloco6.style.display = "flex";
    bloco7.style.display = "none";
    bloco8.style.display = "none";
  } else if (op_select == "Salvador - BA") {
    resultado();
    bloco1.style.display = "none";
    bloco2.style.display = "none";
    bloco3.style.display = "flex";
    bloco4.style.display = "none";
    bloco5.style.display = "none";
    bloco6.style.display = "none";
    bloco7.style.display = "flex";
    bloco8.style.display = "none";
  } else if (op_select == "Belo Horizonte - MG") {
    resultado();
    bloco1.style.display = "none";
    bloco2.style.display = "none";
    bloco3.style.display = "none";
    bloco4.style.display = "flex";
    bloco5.style.display = "none";
    bloco6.style.display = "none";
    bloco7.style.display = "none";
    bloco8.style.display = "flex";
  } else if (
    op_select == "Selecione uma cidade" &&
    input_name_city.value == ""
  ) {
    resultado();
    bloco1.style.display = "flex";
    bloco2.style.display = "flex";
    bloco3.style.display = "flex";
    bloco4.style.display = "flex";
    bloco5.style.display = "none";
    bloco6.style.display = "none";
    bloco7.style.display = "none";
    bloco8.style.display = "none";
  }

  if (
    input_name_city.value.includes("Galo") ||
    (input_name_city.value.includes("galo") &&
      op_select == "Selecione uma cidade")
  ) {
    resultado();
    bloco1.style.display = "flex";
    bloco2.style.display = "none";
    bloco3.style.display = "none";
    bloco4.style.display = "none";
    bloco5.style.display = "flex";
    bloco6.style.display = "none";
    bloco7.style.display = "none";
    bloco8.style.display = "none";
  } else if (
    input_name_city.value.includes("Enquanto isso") ||
    (input_name_city.value.includes("Sala da Justiça") &&
      op_select == "Selecione uma cidade")
  ) {
    resultado();
    bloco1.style.display = "none";
    bloco2.style.display = "none";
    bloco3.style.display = "none";
    bloco4.style.display = "none";
    bloco5.style.display = "none";
    bloco6.style.display = "none";
    bloco7.style.display = "none";
    bloco8.style.display = "flex";
  } else if (
    input_name_city.value.includes("olodum") ||
    (input_name_city.value.includes("Olodum") &&
      op_select == "Selecione uma cidade")
  ) {
    resultado();
    bloco1.style.display = "none";
    bloco2.style.display = "none";
    bloco3.style.display = "flex";
    bloco4.style.display = "none";
    bloco5.style.display = "none";
    bloco6.style.display = "none";
    bloco7.style.display = "none";
    bloco8.style.display = "none";
  } else if (
    input_name_city.value.includes("Bafo") ||
    (input_name_city.value.includes("Onça") &&
      op_select == "Selecione uma cidade")
  ) {
    resultado();
    bloco1.style.display = "none";
    bloco2.style.display = "none";
    bloco3.style.display = "none";
    bloco4.style.display = "flex";
    bloco5.style.display = "none";
    bloco6.style.display = "none";
    bloco7.style.display = "none";
    bloco8.style.display = "none";
  } else if (
    input_name_city.value.includes("Gigantes") ||
    (input_name_city.value.includes("Lira") &&
      op_select == "Selecione uma cidade")
  ) {
    resultado();
    bloco1.style.display = "none";
    bloco2.style.display = "none";
    bloco3.style.display = "none";
    bloco4.style.display = "none";
    bloco5.style.display = "none";
    bloco6.style.display = "flex";
    bloco7.style.display = "none";
    bloco8.style.display = "none";
  } else if (
    input_name_city.value.includes("Ilê") ||
    (input_name_city.value.includes("Aiyê") &&
      op_select == "Selecione uma cidade")
  ) {
    resultado();
    bloco1.style.display = "none";
    bloco2.style.display = "none";
    bloco3.style.display = "none";
    bloco4.style.display = "none";
    bloco5.style.display = "none";
    bloco6.style.display = "none";
    bloco7.style.display = "flex";
    bloco8.style.display = "none";
  } else if (
    input_name_city.value == "" &&
    op_select == "Selecione uma cidade"
  ) {
    resultado();
    bloco1.style.display = "flex";
    bloco2.style.display = "flex";
    bloco3.style.display = "flex";
    bloco4.style.display = "flex";
    bloco5.setAttribute("id", "bloco5");
    bloco6.setAttribute("id", "bloco6");
    bloco7.setAttribute("id", "bloco7");
    bloco8.setAttribute("id", "bloco8");
  }
});
