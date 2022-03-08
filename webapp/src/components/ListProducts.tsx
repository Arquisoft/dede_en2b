import React, {useContext} from "react";
import useFetch from "../hooks/useFetch";
import Product from "./Product";
import styled from "styled-components";
import {ProductType} from "../shared/shareddtypes";
import {CartContext} from "./CartContext";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const ListProducts = () => {

    const {dispatch} = useContext(CartContext);

    const products  = useFetch();

    const handleAddToCart = (product: ProductType) => {
        dispatch({
            payload: product,
            type: 'ADD'
        });
    }

    return (
        <Container>
            {
                products.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}/>
                ))
            }
        </Container>
    )
}

export default ListProducts;