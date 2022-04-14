import { OrderType, ProductType } from "../shared/shareddtypes";


const apiEndPoint =
    process.env.REACT_APP_API_URI
   || "http://localhost:5000/";
const PRODUCT_LIST_API = apiEndPoint + "/product/list";
const ORDER_LIST_API = apiEndPoint + "/order/listByUser";
const ORDER_ID_API = apiEndPoint + "/order/";
const ADD_ORDER_API = apiEndPoint +"/order/add";

export async function getProductCatalog(): Promise<ProductType[]> {

    let response = await fetch(PRODUCT_LIST_API);
    return response.json();
}

export async function getOrdersForUser(webId: string): Promise<OrderType[]> {
    let response = await fetch(ORDER_LIST_API + "/" + webId);
    return response.json();
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
  
export async function getOrderById(orderId:string):Promise<OrderType> {

    let response = await fetch(ORDER_ID_API + orderId);
    return response.json();
}
