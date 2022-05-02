import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import * as conversion from "../../helper/stringToHexadecimal"
import CompleteOrder from "./CompleteOrder";
import * as api from "../../api/api";
import {BrowserRouter} from "react-router-dom";

test("Check that order create function is called and continue shopping button works", async () => {
    jest.spyOn(conversion, "stringToHexadecimal").mockReturnValue("testWebId");
    let persistOrder = jest.spyOn(api, "addOrderForUser").mockImplementation();

    render(<BrowserRouter><CompleteOrder address={"address"} postalCode={33011}/></BrowserRouter>)

    expect(persistOrder).toHaveBeenCalledTimes(1);
    expect(screen.getByText("Thank you for your purchase")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("continueShopping"))
    waitFor( () => expect(screen.getByText("Thank you for your purchase")).not.toBeInTheDocument());
});