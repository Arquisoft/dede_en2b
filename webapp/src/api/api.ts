import {OrderType, ProductType} from '../shared/shareddtypes';

const PRODUCT_LIST_API = "https://localhost:8080/product/list";
const ORDER_LIST_API = "https://localhost:8080/order/listByUser";
const ORDER_ID_API = "https://localhost:8080/order/";

export async function getProductCatalog():Promise<ProductType[]>{
    let response = await fetch(PRODUCT_LIST_API);
    return response.json()
}

export async function getOrdersForUser(webId:string):Promise<OrderType[]> {
    let response = await fetch(ORDER_LIST_API + "/" + webId)
    return response.json()
}

export async function getOrderById(orderId:string):Promise<OrderType> {
    let response = await fetch(ORDER_ID_API + orderId);
    return response.json();
}