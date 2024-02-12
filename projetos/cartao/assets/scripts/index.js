const number = document.getElementById("number");
const nome = document.getElementById("name");
const date_validate = document.getElementById("date_validate");
const cvv = document.getElementById("cvv");
const btn = document.getElementById("btn");
const date_card = document.getElementById("date-card");
const number_card = document.querySelector("#card-number");
const name_user = document.getElementById("name-user");

btn.addEventListener("click", () => {
  number_card.innerHTML = `${number.value}`;
  name_user.innerHTML = `${nome.value}`;
  date_card.innerHTML = `${date_validate.value}`;
  alert("Cartão cadastrado com sucesso!");
});
