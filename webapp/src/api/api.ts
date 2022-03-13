import {ProductType} from '../shared/shareddtypes';

const PRODUCT_LIST_API = "http://localhost:8080/product/list";

export async function getProductCatalog():Promise<ProductType[]>{
    let response = await fetch(PRODUCT_LIST_API);
    return response.json()
}