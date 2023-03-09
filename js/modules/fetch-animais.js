import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  // Cria a div contendo informações
  // com o total de animais
  function creatAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = creatAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }
  // Anima os números de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }
  // puxa os animais através de um arquivo json
  // e cria cada animal utilizando cratAnimal
  async function criarAnimais() {
    try {
      // Fetch, espera a resposta e transforma em json
      const animaisResposta = await fetch(url);
      const animaisJSON = await animaisResposta.json();

      // Após a transformação de json, ativa as funções
      // para preencher e animar os números
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
