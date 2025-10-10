// function switchMode() {
//   const html = document.documentElement;
//   html.classList.toggle("light");

//   const img = document.querySelector("#profile img");

//   if (html.classList.contains("light")) {
//     img.setAttribute("src", "./assets/Avatar-light.png");
//     img.setAttribute(
//       "alt",
//       "Avatar Endrew Marra Pedrosa com chapeu e camisa preta, colar de caveira, fundo neutro branco."
//     );
//   } else {
//     img.setAttribute("src", "./assets/Avatar-dark.png");
//   }
// }
// === Ao carregar a página, aplicar o tema salvo ===
// === Ao carregar a página, aplicar o tema salvo ===
window.addEventListener("DOMContentLoaded", () => {
  const temaSalvo = localStorage.getItem("tema");

  if (temaSalvo === "dark") {
    document.documentElement.classList.remove("light");
  } else {
    document.documentElement.classList.add("light");
  }

  // Ajusta imagem automaticamente ao entrar na página
  const img = document.querySelector("#profile img");
  if (img) {
    img.setAttribute(
      "src",
      temaSalvo === "light"
        ? "./assets/Avatar-light.png"
        : "./assets/Avatar-dark.png"
    );
  }

  // Garante que a animação do botão não ocorra ao carregar a página
  const btn = document.querySelector("#switch button");
  if (btn) {
    btn.classList.add("no-anim");
  }
});


// === Alternar tema ===
function switchMode() {
  const html = document.documentElement;
  const btn = document.querySelector("#switch button");
  // Remove a classe no-anim para permitir animação no clique
  if (btn) {
    btn.classList.remove("no-anim");
  }

  html.classList.toggle("light");

  const temaAtual = html.classList.contains("light") ? "light" : "dark";
  localStorage.setItem("tema", temaAtual);

  // Atualiza imagem ao trocar tema
  const img = document.querySelector("#profile img");
  if (img) {
    img.setAttribute(
      "src",
      temaAtual === "light"
        ? "./assets/Avatar-light.png"
        : "./assets/Avatar-dark.png"
    );
  }
}

