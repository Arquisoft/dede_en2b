import {render, screen, waitFor} from "@testing-library/react";
import {OrderProduct, OrderType, ProductType} from "../../shared/shareddtypes";
import * as api from "../../api/api";
import OrderDetail from "./OrderDetail";

const testProduct:ProductType = {id:1, name:"Watermelon", category:"Fruit", price:1.25,
    image:"https://images.unsplash.com/photo-1629084092232-b7b3fa74cd4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    description: "Rica sandia" };

const testOrderProducts:OrderProduct[] = [{id:1, quantity:2, price:1.25, product:testProduct, order:undefined!}];

const testOrder:OrderType = {id:1, user:"customer", orderProducts:testOrderProducts, totalPrice:2.50, date:"12/01/2022",
    status:"SHIPPED", address:"C/Marqués Pérez 9 1A, Asturias", postalCode:33010};

test('Check that order detail view is properly rendered', async () => {
    jest.spyOn(api, "getOrderById").mockReturnValue(Promise.resolve(testOrder));
    render(<OrderDetail/>)

    await waitFor (() => expect(screen.getByText("Watermelon")).toBeInTheDocument());
    expect(screen.getByText("Shipping address: C/Marqués Pérez 9 1A, Asturias | Postal Code: 33010")).toBeInTheDocument();
    expect(screen.getByText("PROCESSING")).toBeInTheDocument();
    expect(screen.getByText("SHIPPED")).toBeInTheDocument();
    expect(screen.getByText("RECEIVED")).toBeInTheDocument();
});

test("Check that order status progress bar works as intented acording to the status of the order: SHIPPED", async () => {
    jest.spyOn(api, "getOrderById").mockReturnValue(Promise.resolve(testOrder));
    render(<OrderDetail/>)

    await waitFor (() => expect(screen.getByText("Watermelon")).toBeInTheDocument());
    let processingButton = screen.getByText("PROCESSING");
    expect(processingButton.outerHTML).toEqual("<span class=\"MuiStepLabel-label Mui-completed MuiStepLabel-alternativeLabel css-qivjh0-MuiStepLabel-label\">PROCESSING</span>")
    let shippedButton = screen.getByText("SHIPPED");
    expect(shippedButton.outerHTML).toEqual("<span class=\"MuiStepLabel-label Mui-active MuiStepLabel-alternativeLabel css-qivjh0-MuiStepLabel-label\">SHIPPED</span>")
    let receivedButton = screen.getByText("RECEIVED");
    expect(receivedButton.outerHTML).toEqual("<span class=\"MuiStepLabel-label Mui-disabled MuiStepLabel-alternativeLabel css-qivjh0-MuiStepLabel-label\">RECEIVED</span>")
});

test("Check that order status progress bar works as intented acording to the status of the order: PROCESSING", async () => {
    testOrder.status = "PROCESSING";
    jest.spyOn(api, "getOrderById").mockReturnValue(Promise.resolve(testOrder));
    render(<OrderDetail/>)

    await waitFor (() => expect(screen.getByText("Watermelon")).toBeInTheDocument());
    let processingButton = screen.getByText("PROCESSING");
    expect(processingButton.outerHTML).toEqual("<span class=\"MuiStepLabel-label Mui-active MuiStepLabel-alternativeLabel css-qivjh0-MuiStepLabel-label\">PROCESSING</span>")
    let shippedButton = screen.getByText("SHIPPED");
    expect(shippedButton.outerHTML).toEqual("<span class=\"MuiStepLabel-label Mui-disabled MuiStepLabel-alternativeLabel css-qivjh0-MuiStepLabel-label\">SHIPPED</span>")
    let receivedButton = screen.getByText("RECEIVED");
    expect(receivedButton.outerHTML).toEqual("<span class=\"MuiStepLabel-label Mui-disabled MuiStepLabel-alternativeLabel css-qivjh0-MuiStepLabel-label\">RECEIVED</span>")
});

test("Check that order status progress bar works as intented acording to the status of the order: RECEIVED", async () => {
    testOrder.status = "RECEIVED";
    jest.spyOn(api, "getOrderById").mockReturnValue(Promise.resolve(testOrder));
    render(<OrderDetail/>)

    await waitFor (() => expect(screen.getByText("Watermelon")).toBeInTheDocument());
    let processingButton = screen.getByText("PROCESSING");
    expect(processingButton.outerHTML).toEqual("<span class=\"MuiStepLabel-label Mui-completed MuiStepLabel-alternativeLabel css-qivjh0-MuiStepLabel-label\">PROCESSING</span>")
    let shippedButton = screen.getByText("SHIPPED");
    expect(shippedButton.outerHTML).toEqual("<span class=\"MuiStepLabel-label Mui-completed MuiStepLabel-alternativeLabel css-qivjh0-MuiStepLabel-label\">SHIPPED</span>")
    let receivedButton = screen.getByText("RECEIVED");
    expect(receivedButton.outerHTML).toEqual("<span class=\"MuiStepLabel-label Mui-active MuiStepLabel-alternativeLabel css-qivjh0-MuiStepLabel-label\">RECEIVED</span>")
});



