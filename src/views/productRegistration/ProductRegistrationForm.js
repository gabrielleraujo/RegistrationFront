import validate from "../../services/validation/ProductRegistrationValidationService.js";
import { addStyleRequired } from "../../services/style/UtilStyleService.js";
import { postNewProduct, getCategories, getColors, getSizes } from "../../services/api/ProductRegistrationApiService.js";

let form = document.querySelector('[register]');

form.addEventListener("submit", function (event) {  
    event.preventDefault();  
    debugger;
    let form = event.target;
    if(validate(form)) { postNewProduct(form); }
});

window.addEventListener("load", function (event) {
    event.preventDefault();

    let form = event.target;
    let categorySelectTag = form.querySelector('[in-category]');
    let colorSelectTag = form.querySelector('[in-color]');
    let sizeSelectTag = form.querySelector('[in-size]');

    let tags = [
        form.querySelector('[in-name]'), 
        form.querySelector('[in-price]'),
        form.querySelector('[in-description]'),
        categorySelectTag,
        colorSelectTag,
        sizeSelectTag
    ]

    addStyleRequired(tags);
    loadOptions(categorySelectTag, colorSelectTag, sizeSelectTag);
})

function loadOptions(categorySelectTag, colorSelectTag, sizeSelectTag) {
    getCategories().then(function (viewModelList) {
        if (viewModelList == undefined) { return; }
        viewModelList.forEach(viewModel => {
            categorySelectTag.querySelector("option")
            .insertAdjacentHTML('afterend',`<option value="${viewModel.id}">${viewModel.categoryText}</option>`);
        });
    });
    
    getColors().then(function (viewModelList) {
        if (viewModelList == undefined) { return; }
        viewModelList.forEach(viewModel => {
            colorSelectTag.querySelector("option")
            .insertAdjacentHTML('afterend',`<option value="${viewModel.id}">${viewModel.colorText}</option>`);
        });
    });

    getSizes().then(function (viewModelList) {
        if (viewModelList == undefined) { return; }
        viewModelList.forEach(viewModel => {
            sizeSelectTag.querySelector("option")
            .insertAdjacentHTML('afterend',`<option value="${viewModel.id}">${viewModel.sizeText}</option>`);
        });
    });
}
