import { girarBanner } from "./banner_controller.js";
import { createCards } from "./cards_projetos_controller.js";

window.girarBanner = girarBanner;

document.addEventListener("DOMContentLoaded", ()=>{
    createCards();
})

const { projetoscollection } = require('./firebase');