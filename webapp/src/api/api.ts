import {OrderType, ProductType} from '../shared/shareddtypes';

const PRODUCT_LIST_API = "http://localhost:8080/product/list";
const ORDER_LIST_API = "http://localhost:8080/order/listByUser";
const ADD_ORDER_API = "http://localhost:8080/order/add";

export async function getProductCatalog():Promise<ProductType[]>{
    let response = await fetch(PRODUCT_LIST_API);
    return response.json()
}

export async function getOrdersForUser(webId:string):Promise<OrderType[]> {
    let response = await fetch(ORDER_LIST_API + "/" + webId)
    return response.json()
}

export async function addOrderForUser(order:OrderType){

    const fetchApi = await fetch(ADD_ORDER_API,{
        method: 'POST',
        body: JSON.stringify(order),
        headers:{
            'Content-type': 'application/json'
        }
    })

    return fetchApi;
}