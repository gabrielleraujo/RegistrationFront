import { addStyleRequired } from "../../services/style/UtilStyleService.js";
import validate from "../../services/validation/ProductRegistrationValidationService.js";
import postNewProduct from "../../services/api/ProductRegistrationApiService.js";

let form = document.querySelector('[register]');

window.addEventListener("load", function (event) {
    event.preventDefault();

    addStyleRequired(event.target.querySelector('[in-name]'));
    addStyleRequired(event.target.querySelector('[in-price]'));
    addStyleRequired(event.target.querySelector('[in-description]'));
    addStyleRequired(event.target.querySelector('[in-category]'));
    addStyleRequired(event.target.querySelector('[in-color]'));
    addStyleRequired(event.target.querySelector('[in-size]'));
})

form.addEventListener("submit", function (event) {  
    event.preventDefault();  

    let form = event.target;
    if(validate(form)) { postNewProduct(form); }
});
