import React from 'react'
import { render } from "@testing-library/react";
import OrderView from "./OrderView";
import {OrderType, ProductType} from "../../shared/shareddtypes";
import {BrowserRouter} from "react-router-dom";


test('check that an order renders properly', async () => {
    const productExample:ProductType = {id:1, name:"Watermelon", category:"Fruit", price:1.12, image:"https://images.unsplash.com/photo-1629084092232-b7b3fa74cd4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" };
    // @ts-ignore
    const orderExample:OrderType = {id:1, status:"SHIPPED", totalPrice:23.4, date:"12/01/2022", user:"laura", orderProducts:[{id:2, price:1.1, quantity:20, product:productExample}]};
    const {getByText} = render( <BrowserRouter> <OrderView  order={orderExample}/> </BrowserRouter>);
    expect(getByText(orderExample.status)).toBeInTheDocument();
});