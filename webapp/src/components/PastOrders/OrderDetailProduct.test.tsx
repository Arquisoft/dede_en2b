import OrderDetailProduct from "./OrderDetailProduct";
import { render, screen} from "@testing-library/react";
import {OrderProduct, ProductType} from "../../shared/shareddtypes";

const testProduct:ProductType = {id:1, name:"Watermelon", category:"Fruit", price:1.25,
    image:"https://images.unsplash.com/photo-1629084092232-b7b3fa74cd4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    description: "Rica sandia" };

const testOrderProduct:OrderProduct = {id:1, quantity:2, price:1.25, product:testProduct, order:undefined!};

test('Check that order product is properly rendered and total', async () => {
    render(<OrderDetailProduct item={testOrderProduct}/>);
    expect(screen.getByText(testProduct.name)).toBeInTheDocument();
    expect(screen.getByText("Units: " + testOrderProduct.quantity)).toBeInTheDocument();
    expect(screen.getByText(testOrderProduct.price + "€")).toBeInTheDocument();
});

test('Check that subtotal of this product is correctly calculated', async () => {
    render(<OrderDetailProduct item={testOrderProduct}/>);
    expect(screen.getByText(testOrderProduct.price * testOrderProduct.quantity + "€")).toBeInTheDocument();
});