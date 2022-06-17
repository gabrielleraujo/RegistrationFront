import { loadHeader } from "../shared/layout.js";
import { isValid, clearValidations } from "../../services/validation/ProductRegistrationValidationService.js";
import { addStyleRequired } from "../../services/style/UtilStyleService.js";
import { 
    createNewProduct, 
    loadCategories, 
    loadColors, 
    loadSizes 
} from "./ProductRegistrationApp.js";

let form = document.querySelector('[register]');

let nameInputTag = form.querySelector('[in-name]');
let priceInputTag = form.querySelector('[in-price]');
let descriptionInputTag = form.querySelector('[in-description]');
let categorySelectTag = form.querySelector('[in-category]');
let colorSelectTag = form.querySelector('[in-color]');
let sizeSelectTag = form.querySelector('[in-size]');

let fields = {
    name: nameInputTag, 
    price: priceInputTag,
    description: descriptionInputTag,
    category: categorySelectTag,
    color: colorSelectTag,
    size: sizeSelectTag
}

let requiredFields = [
    nameInputTag, 
    priceInputTag,
    descriptionInputTag,
    categorySelectTag,
    colorSelectTag,
    sizeSelectTag
]

form.addEventListener("submit", function (event) {  
    event.preventDefault();  

    clearValidations(form);
    if(isValid(fields)) { createNewProduct(form); }
});

window.addEventListener("load", function (event) {
    event.preventDefault();

    loadHeader();
    addStyleRequired(requiredFields);
    loadCategories(categorySelectTag);
    loadColors(colorSelectTag);
    loadSizes(sizeSelectTag);
})
