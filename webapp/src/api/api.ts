import { OrderType, ProductType, RatingType } from "../shared/shareddtypes";


const apiEndPoint =
    process.env.REACT_APP_API_URI
   || "http://localhost:5000";
const PRODUCT_LIST_API = apiEndPoint + "/product/list";
const PRODUCT_GETBYID_API = apiEndPoint + "/product/";
const ORDER_LIST_API = apiEndPoint + "/order/listByUser";
const ORDER_ID_API = apiEndPoint + "/order/";
const ADD_ORDER_API = apiEndPoint +"/order/add";
const ADD_PRODUCT_API = apiEndPoint +"/product/add";
const GET_RATINGS_API = apiEndPoint + "/rating/";
const ADD_RATING_API = apiEndPoint +"/rating/add";

export async function getProductCatalog(): Promise<ProductType[]> {
    let response = await fetch(PRODUCT_LIST_API);
    return response.json();
}

export async function getProductsByCategory(category:string): Promise<ProductType[]> {
    let response = await fetch(PRODUCT_LIST_API + "/" + category);
    return response.json();
}

export async function getOrdersForUser(webId: string): Promise<OrderType[]> {
    let response = await fetch(ORDER_LIST_API + "/" + webId);
    return response.json();
}

export async function getProductById(id: string): Promise<ProductType> {
    let response = await fetch(PRODUCT_GETBYID_API + id);
    return response.json();
}

export async function getRatingsForProduct(id: string): Promise<RatingType[]> {
    let response = await fetch(GET_RATINGS_API + id);

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

export async function addProduct(product:ProductType){

    const fetchApi = await fetch(ADD_PRODUCT_API,{
        method: 'POST',
        body: JSON.stringify(product),
        headers:{
            'Content-type': 'application/json'
        }
    })

    return fetchApi;
}

export async function addRatingForProduct(rating:RatingType){

    const fetchApi = await fetch(ADD_RATING_API,{
        method: 'POST',
        body: JSON.stringify(rating),
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
