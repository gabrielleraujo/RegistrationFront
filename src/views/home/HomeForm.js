import { loadHeader } from "../shared/layout.js";
import { loadProducts } from "./HomeApp.js";

let section = document.querySelector('[catalog]');

window.addEventListener("load", function (event) {
    event.preventDefault();

    loadHeader();
    loadProducts(section);
})

