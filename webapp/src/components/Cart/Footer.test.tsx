import {render, screen} from "@testing-library/react";
import Footer from "./Footer"
import * as delivery from "../../helper/calculateDeliveryCost";
import {Address} from "../../shared/shareddtypes";
import * as helper from "../../helper/addressHelper";
import * as React from "react";


test("Check that when not logged in, user can not proceed with checkout", async () => {
    jest.spyOn(delivery, "GetAddress").mockReturnValue(Promise.resolve("C/Los Campos 9 1A, Oviedo, Asturias, Spain"));
    jest.spyOn(delivery, "GetPostalCode").mockReturnValue(Promise.resolve(33011));
    jest.spyOn(delivery, "GetDeliveryCost").mockReturnValue(Promise.resolve(10.5));

    let addressList: Address[] = [{ street: "street", city: "city", state: "state", postalCode: "postalCode", country: "country" }];
    jest.spyOn(helper, "retrieveAddressesForUser").mockImplementation( () => Promise.resolve(sessionStorage.setItem("addresses", JSON.stringify(addressList))));

    render(<Footer/>)

    expect(screen.getByTestId("notLoggedIn")).toBeInTheDocument();
    expect(screen.queryByText("Checkout")).not.toBeInTheDocument();
});