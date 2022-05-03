import {ProductType} from "../shared/shareddtypes";
import ListProducts from "./ListProducts";
import {render, screen, waitForElementToBeRemoved} from "@testing-library/react";

const testProductList:ProductType[] = [{id:1, name:"Watermelon", category:"Fruit", price:3.45,
    image:"https://images.unsplash.com/photo-1629084092232-b7b3fa74cd4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    description: "Rica sandia" },
    {id:2, name:"Salmon", category:"Fish", price:5.55,
        image:"https://images.unsplash.com/photo-1499125562588-29fb8a56b5d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
        description: "Salmon description" }
];

test("Check that products are correctly rendered", async () => {
    ///////// We need to change the implementation of ListProduct
    //jest.spyOn(api, "useFetch").mockReturnValue(Promise.resolve(testProductList));
    //render(<ListProducts/>)

    //await waitForElementToBeRemoved(() => screen.getByTestId('loadingProduct'));
    //expect(screen.getByText("Watermelon - 3.45€")).toBeInTheDocument();
    //expect(screen.getByText("Rica sandia")).toBeInTheDocument();
});