import {render} from "@testing-library/react";
import PaypalButton from "./PaypalButton";
import * as cost from "../../helper/calculateCartTotal"
import * as shipping from "../../helper/calculateDeliveryCost"

test("Check that for the paypal payment total order cost and shipping cost are called only once", async () => {
    let costCall = jest.spyOn(cost, "calculateTotal").mockReturnValue(2);
    let shippingCostCall = jest.spyOn(shipping, "GetDeliveryCost").mockReturnValue(Promise.resolve(1.3));

    render(<PaypalButton payed={() => {}}/>)

    expect(costCall).toHaveBeenCalledTimes(1);
    expect(shippingCostCall).toHaveBeenCalledTimes(1);
});