let nome = document.getElementById("nome");
let data_nasc = document.getElementById("data_nasc");
let btn_enviar = document.getElementById("btn_enviar");

btn_enviar.addEventListener("click", () => {
  localStorage.setItem("nome", nome.value);
  localStorage.setItem("data_nasc", data_nasc.value);
  alert("Nome : " + localStorage.getItem("nome"));
  alert("Data_nasc : " + localStorage.getItem("data_nasc"));
});
