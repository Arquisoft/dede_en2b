import {useEffect, useState} from "react";
import {ProductType} from "../shared/shareddtypes";
import {getProductCatalog, getProductsByCategory} from "../api/api";

const useFetch = (category?:string) => {
    const [products, setProducts] = useState<ProductType[]>([]);

    const getProducts = async () => {
        if (category !== null &&  category !== undefined) {
            setProducts(await getProductsByCategory(category!));
        } else {
            setProducts(await getProductCatalog());
        }
    }

    useEffect(() => {
        getProducts()
    }, []);

    return products;
}

export default useFetch;