import { bd_formacao } from "../../model/cards_formacao_bd.js";

export function createCards() {
   let cards_section = document.getElementById('cards')

   bd_formacao.map((cards_projetos) => {
      let card = document.createElement('div');
      card.className = 'card';

      let titulo = document.createElement('h1')
      titulo.textContent = cards_projetos.titulo;
      let horas = document.createElement('h3')
      horas.textContent = cards_projetos.horas;

      card.appendChild(titulo);
      card.appendChild(horas);

      cards_section.appendChild(card);
   })
}