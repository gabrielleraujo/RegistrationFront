import { addStyleRequired } from "../../services/style/UtilStyleService.js";
import validate from "../../services/validation/ProductRegistrationValidationService.js";
import postNewProduct from "../../services/api/ProductRegistrationApiService.js";

let form = document.querySelector('[register]');

window.addEventListener("load", function (event) {
    event.preventDefault();

    let form = event.target;
    addStyleRequired(form.querySelector('[in-name]'));
    addStyleRequired(form.querySelector('[in-price]'));
    addStyleRequired(form.querySelector('[in-description]'));
    addStyleRequired(form.querySelector('[in-category]'));
    addStyleRequired(form.querySelector('[in-color]'));
    addStyleRequired(form.querySelector('[in-size]'));
})

form.addEventListener("submit", function (event) {  
    event.preventDefault();  

    let form = event.target;
    if(validate(form)) { postNewProduct(form); }
});
