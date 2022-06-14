import { ProductRequestViewModel } from "../../../models/product/ProductRequestViewModel.js";

export function createProductRequestViewModelFactory(form) {
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
