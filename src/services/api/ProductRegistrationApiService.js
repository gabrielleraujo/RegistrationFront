import { ECOMMERCE_URL, createdStatusCode } from "./utils/Urls.js"
import { createProductRequestViewModelFactory } from "./factories/ProductRequestViewModelFactory.js";

function getCategories() { return getViewModel("category"); }
function getColors() { return getViewModel("color"); }
function getSizes() { return getViewModel("size"); }

function getViewModel(model) 
{
    const result = document.getElementById("result-form");
    return fetch(`${ECOMMERCE_URL}${model}`)
    .then(resp => resp.json())
    .catch(e => {
        result.innerHTML = e
    });
}

function postNewProduct(form) {
    debugger;
    const options = {
        method: form.method,
        body: JSON.stringify(createProductRequestViewModelFactory(form)),
        headers: {
            "dataType": "json",
            "charset": "utf8",
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }

    const result = document.getElementById("result-form");
    fetch(`${ECOMMERCE_URL}product`, options)
    .then(resp => {
        result.innerHTML = resp.status == createdStatusCode 
        ? "Product registered successfully!" 
        : "An error has occurred /:"
    })
    .catch(e => {
        result.innerHTML = e
    });
}

export { postNewProduct, getCategories, getColors, getSizes };
