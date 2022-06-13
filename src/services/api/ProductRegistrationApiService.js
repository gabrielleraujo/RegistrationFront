import {ProductRequestViewModel} from "../../models/product/ProductRequestViewModel.js";
import {ECOMMERCE_URL} from "../util/Urls.js"

function postNewProduct(form)
{
    const options = {
        method: form.method,
        body: JSON.stringify(createProductRequestViewModel(form)),
        headers: {
            "dataType": "json",
            "charset": "utf8",
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }

    const result = document.getElementById("result-form");

    fetch(`${ECOMMERCE_URL}product`, options)
    .then(resp => resp.json())
    .then(json => {
        result.innerHTML = JSON.stringify(json)
    })
    .catch(e => {
        result.innerHTML = e
    });
}

function createProductRequestViewModel(form)
{
    const data = new FormData(form);
    const searchParams = new URLSearchParams(data);
    
    return new ProductRequestViewModel(
        searchParams.get("name"),
        searchParams.get("price"),
        searchParams.get("description"),
        searchParams.get("categoryId"),
        searchParams.get("colorId"),
        searchParams.get("sizeId")
    )
}

export default postNewProduct;
