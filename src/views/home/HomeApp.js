import { getProducts } from "../../services/api/ProductApiService.js";

const result = document.getElementById("log");
const logException = (e) => result.innerHTML = e;

function loadProducts(catalogSectionTag) {
    getProducts()
    .then(function (viewModelList) {

        if (viewModelList == undefined) { return; }

        catalogSectionTag.insertAdjacentHTML('beforeend',`<ul itens class="col"></ul>`);
        let listTag = catalogSectionTag.querySelector("[itens]");

        viewModelList.forEach(viewModel => {
            listTag.insertAdjacentHTML('beforeend',`
                <li class="item col">
                    <p>${viewModel.name}</p>
                    <p class="price">Price: R$${viewModel.price}</p>
                    <br/>
                    <div class="container-item">
                        <button class="btn btn-info">Details</button>
                        <button class="btn btn-success">Buy</button>
                    </div>
                    <br/>
                </li>`);
        });
    }).catch(e => logException(e));
}

export { loadProducts }