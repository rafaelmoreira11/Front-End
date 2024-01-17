let area = prompt("Qual área deseja seguir? (1-Back / 2-Front)");

if (area === "2") {
  front();
}
if (area == "1") {
  back();
}

function front() {
  let lang = prompt("Qual FrameWork vai aprender? (1-React / 2-Vue)");
  if (lang == "1" || "2") {
    let op = prompt(
      "Escolha uma das opções : (1- Se especializar / 2- Se tornar FullStack"
    );
    if (op == "1") {
      alert(
        "Ótima escolha! Espero que sua decisão te leve para o objetivo que você deseje!"
      );
    }
    if (op == "2") {
      alert(
        "Ótima escolha! A carreira de FullStack é uma boa decisão para sua trajetória!"
      );
    }
  }
  while (true) {
    let otherLang = prompt(
      "Deseja aprender algum outros FrameWorks/Linguagens?"
    );
    if (!otherLang) {
      alert("Te vejo na próxima!");
      break;
    }
  }
}

function back() {
  let lang = prompt("Qual linguagem vai aprender? (1-C# / 2-Java)");
  if (lang == "1" || "2") {
    let op = prompt(
      "Escolha uma das opções : (1- Se especializar / 2- Se tornar FullStack"
    );
    if (op == "1") {
      alert(
        "Ótima escolha! Espero que sua decisão te leve para o objetivo que você deseje!"
      );
    }
    if (op == "2") {
      alert(
        "Ótima escolha! A carreira de FullStack é uma boa decisão para sua trajetória!"
      );
    }
  }

  while (true) {
    let otherLang = prompt("Deseja aprender outros FrameWorks/Linguagens?");
    if (!otherLang) {
      alert("Te vejo na próxima!");
      break;
    }
  }
}
