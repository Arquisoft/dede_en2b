import React from 'react'
import { render } from "@testing-library/react";
import Product from "./Product";
import {ProductType} from "../shared/shareddtypes";


test('check that a product renders properly', async () => {
    const productExample:ProductType = {id:1, name:"Watermelon", category:"Fruit", price:1.12, image:"https://images.unsplash.com/photo-1629084092232-b7b3fa74cd4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" };
    const {getByText} = render( <Product product={productExample} handleAddToCart={(product:ProductType) => 0 }/>);
    expect(getByText(productExample.name)).toBeInTheDocument();
});