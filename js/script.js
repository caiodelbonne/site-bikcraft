// ativar marcador de paginas no menu

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
    // console.log(link);
  }
}

links.forEach(ativarLink);
//
// ativar link do orçamento
// mexer no html adc parametro

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
  // console.log(elemento);
}
parametros.forEach(ativarProduto);

//  perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);

  console.log(resposta);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);
// console.log(perguntas);

/*
                  Galeria de fotos 
*/
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const containerGaleria = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = window.matchMedia("(min-width:1000px)").matches;
  if (media) {
    containerGaleria.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

//      animaçaoo
if (window.SimpleAnime) {
  new SimpleAnime();
}

// clibBoard