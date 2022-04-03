import { OrderType, ProductType } from "../shared/shareddtypes";

const apiEndPoint =
    //process.env.REACT_APP_API_URI
    "http://54.234.146.174:5000" || "http://localhost:5000";
const PRODUCT_LIST_API = apiEndPoint + "/product/list";
const ORDER_LIST_API = apiEndPoint + "/order/listByUser";
const ORDER_ID_API = apiEndPoint + "/order/";

export async function getProductCatalog(): Promise<ProductType[]> {
    let response = await fetch(PRODUCT_LIST_API);
    return response.json();
}

export async function getOrdersForUser(webId: string): Promise<OrderType[]> {
    let response = await fetch(ORDER_LIST_API + "/" + webId);
    return response.json();
}

export async function getOrderById(orderId: string): Promise<OrderType> {
    let response = await fetch(ORDER_ID_API + orderId);
    return response.json();
}
