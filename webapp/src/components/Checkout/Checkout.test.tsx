import Checkout from "./Checkout";
import * as delivery from "../../helper/calculateDeliveryCost"
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import * as helper from "../../helper/addressHelper"
import {Address} from "../../shared/shareddtypes";
import {GetDeliveryCost} from "../../helper/calculateDeliveryCost";

test("Check that checkout prioritizes address in the POD Vcard over address in Thing", async () => {
    jest.spyOn(delivery, "GetAddress").mockReturnValue(Promise.resolve("C/Los Campos 9 1A, Oviedo, Asturias, Spain"));
    jest.spyOn(delivery, "GetPostalCode").mockReturnValue(Promise.resolve(33011));
    jest.spyOn(delivery, "GetDeliveryCost").mockReturnValue(Promise.resolve(10.5));

    let addressList: Address[] = [{ street: "street", city: "city", state: "state", postalCode: "postalCode", country: "country" }];
    jest.spyOn(helper, "retrieveAddressesForUser").mockImplementation( () => Promise.resolve(sessionStorage.setItem("addresses", JSON.stringify(addressList))));

    render(<Checkout/>)

    await waitFor(() => expect(screen.getByText("Address: C/Los Campos 9 1A, Oviedo, Asturias, Spain | Postal Code: 33011")).toBeInTheDocument());
    expect(screen.getByText("10.5€")).toBeInTheDocument();
});

test("Check that after clicking the next button, order information is no longer shown (screen moved to next step)", async () => {
    jest.spyOn(delivery, "GetAddress").mockReturnValue(Promise.resolve("Address"));
    jest.spyOn(delivery, "GetPostalCode").mockReturnValue(Promise.resolve(33010));
    jest.spyOn(delivery, "GetDeliveryCost").mockReturnValue(Promise.resolve(10.5));

    let addressList: Address[] = [{ street: "street", city: "city", state: "state", postalCode: "postalCode", country: "country" }];
    jest.spyOn(helper, "retrieveAddressesForUser").mockImplementation( () => Promise.resolve(sessionStorage.setItem("addresses", JSON.stringify(addressList))));

    render(<Checkout/>)

    await waitFor(() => expect(screen.getByText("10.5€")).toBeInTheDocument());
    fireEvent.click(screen.getByText("Next"))
    expect(screen.queryByText("10.5€")).not.toBeInTheDocument();
});