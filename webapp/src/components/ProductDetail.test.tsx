import * as api from "../api/api";
import {ProductType, RatingType} from "../shared/shareddtypes";
import ProductDetail from "./ProductDetail";
import {render, screen, waitForElementToBeRemoved} from "@testing-library/react";

const testProduct:ProductType = {id:1, name:"Watermelon", category:"Fruit", price:3.45,
    image:"https://images.unsplash.com/photo-1629084092232-b7b3fa74cd4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    description: "Rica sandia" };

const testRating:RatingType[] = [{user:"WatermelonLover", comment:"Nice watermelon", rating:0.9, product:testProduct},
    {user:"Laura", comment:"Bad watermelon", rating:0.1, product:testProduct}]

test("Check that the details view of a product is renderer properly", async () => {
    jest.spyOn(api, "getProductById").mockReturnValue(Promise.resolve(testProduct));
    render(<ProductDetail/>)

    await waitForElementToBeRemoved(() => screen.getByTestId('loadingProduct'));
    expect(screen.getByText("Watermelon - 3.45€")).toBeInTheDocument();
    expect(screen.getByText("Rica sandia")).toBeInTheDocument();
});

test("Check that reviews of a product are rendered correctly", async () => {
    jest.spyOn(api, "getProductById").mockReturnValue(Promise.resolve(testProduct));
    jest.spyOn(api, "getRatingsForProduct").mockReturnValue(Promise.resolve(testRating));
    render(<ProductDetail/>)

    await waitForElementToBeRemoved(() => screen.getByTestId('loadingProduct'));
    expect(screen.getByText("Nice watermelon")).toBeInTheDocument();
    expect(screen.getByText("WatermelonLover")).toBeInTheDocument();
    expect(screen.getByText("Bad watermelon")).toBeInTheDocument();
    expect(screen.getByText("Laura")).toBeInTheDocument();
});
