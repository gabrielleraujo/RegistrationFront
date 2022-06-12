import validate from "../validationService/RegistrationValidationService.js";
import { addStyleRequired } from "../styleService/StyleService.js";

let form = document.querySelector('[register]');

form.addEventListener("submit", function (event) {  
    event.preventDefault();    
    validate(event.target);
});

window.addEventListener("load", function (event) {
    event.preventDefault();

    addStyleRequired(event.target.querySelector('[in-name]'));
    addStyleRequired(event.target.querySelector('[in-price]'));
    addStyleRequired(event.target.querySelector('[in-description]'));
    addStyleRequired(event.target.querySelector('[in-category]'));
    addStyleRequired(event.target.querySelector('[in-color]'));
    addStyleRequired(event.target.querySelector('[in-size]'));
})
