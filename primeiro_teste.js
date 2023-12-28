const corredor1 = {
  nome: "Ayrton Senna",
  equipe: "Maclaren",
  idade: 29,
  correr: function () {
    return "vrummmmmm";
  },
};

// Exibir o nome do corredor na tela
const nomeCorredorElement = document.getElementById("nomeCorredor");
nomeCorredorElement.textContent = corredor1.nome;

// Associando a função correr() a um botão
const correrBtn = document.getElementById("correrBtn");
const resultadoElement = document.getElementById("resultado");

correrBtn.addEventListener("click", function () {
  const resultado = corredor1.correr();
  resultadoElement.textContent = resultado;
});
