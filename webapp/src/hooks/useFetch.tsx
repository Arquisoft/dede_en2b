import {useEffect, useState} from "react";
import {ProductType} from "../shared/shareddtypes";
import {getProductCatalog} from "../api/api";

const useFetch = () => {
    const [products, setProducts] = useState<ProductType[]>([]);

    const getProducts = async () => {
        setProducts(await getProductCatalog());
    }

    useEffect(() => {
        getProducts()
    }, []);

    return products;
}

export default useFetch;