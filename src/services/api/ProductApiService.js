import { ECOMMERCE_URL } from "../../shared/Url.js"

function getCategories() { return getViewModel("category"); }
function getColors() { return getViewModel("color"); }
function getSizes() { return getViewModel("size"); }
function getProducts() { return getViewModel("product"); }

function getViewModel(model) 
{
    return fetch(`${ECOMMERCE_URL}${model}`)
    .then(resp => resp.json())
}

function postNewProduct(requestViewModel) {
    const options = {
        method: "post",
        body: JSON.stringify(requestViewModel),
        headers: {
            "dataType": "json",
            "charset": "utf8",
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }
    return fetch(`${ECOMMERCE_URL}product`, options)
}

export { postNewProduct, getCategories, getColors, getSizes, getProducts };
