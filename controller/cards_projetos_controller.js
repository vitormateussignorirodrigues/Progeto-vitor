import { getprojects } from "../services/projects_services.js";

export async function createCards() {
   let cards_section = document.getElementById('cards')

   const bd_projetos = await getprojects()

   bd_projetos.map((cards_projetos) => {
      let card = document.createElement('div');
      card.className = 'card';

      let titulo = document.createElement('h1')
      titulo.textContent = cards_projetos.titulo;
      let preco = document.createElement('h3')
      preco.textContent = cards_projetos.preco;

      card.appendChild(titulo);
      card.appendChild(preco);

      cards_section.appendChild(card);
   })
}