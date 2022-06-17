import { postNewProduct, getCategories, getColors, getSizes } from "../../services/api/ProductApiService.js";
import { createProductRequestViewModelFactory } from "../../factories/ProductRequestViewModelFactory.js";
import { CREATED_STATUS_CODE } from "../../shared/StatusCode.js"

const result = document.getElementById("result-form");
const logException = (e) => result.innerHTML = e;

function createNewProduct(form) {
    postNewProduct(createProductRequestViewModelFactory(form))
    .then(resp => {
        
        result.innerHTML = resp.status == CREATED_STATUS_CODE 
        ? "Product registered successfully!" 
        : "An error has occurred /:"
    }).catch(e => logException(e));    
} 

function loadCategories(categorySelectTag) {
    getCategories()
    .then(function (viewModelList) {
    
        if (viewModelList == undefined) { return; }
        
        viewModelList.forEach(viewModel => {
            categorySelectTag.querySelector("option")
            .insertAdjacentHTML('afterend',`<option value="${viewModel.id}">${viewModel.categoryText}</option>`);
        });
    }).catch(e => logException(e));
}

function loadColors(colorSelectTag) {
    getColors()
    .then(function (viewModelList) {

        if (viewModelList == undefined) { return; }
        
        viewModelList.forEach(viewModel => {
            colorSelectTag.querySelector("option")
            .insertAdjacentHTML('afterend',`<option value="${viewModel.id}">${viewModel.colorText}</option>`);
        });
    }).catch(e => logException(e));
}

function loadSizes(sizeSelectTag) {
    getSizes()
    .then(function (viewModelList) {

        if (viewModelList == undefined) { return; }
        
        viewModelList.forEach(viewModel => {
            sizeSelectTag.querySelector("option")
            .insertAdjacentHTML('afterend',`<option value="${viewModel.id}">${viewModel.sizeText}</option>`);
        });
    }).catch(e => logException(e));
}

export { loadCategories, loadColors, loadSizes, createNewProduct }