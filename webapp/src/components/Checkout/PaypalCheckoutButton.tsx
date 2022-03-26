import { PayPalButtons } from "@paypal/react-paypal-js";
import { calculateTotal } from '../../helper/calculateCartTotal';
import { useContext } from "react";
import {CartContext} from "../CartContext";

//
const sandboxId = 'AZl80cnJ3GAjahCeDby4Hw7amZs3fr-C1gUfC5pkIu6z_i3GinKI8KhCcg1BcRsDVn1ms0WwaVD7uHDY';


export default function PaypalCheckoutButton() : JSX.Element {
    const {cartItems} = useContext(CartContext);
    const subTotal = calculateTotal(cartItems).toFixed(2); // ADD SHIPPING COST
    const totalString = subTotal.toString();

    return (
        <PayPalButtons
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: totalString,
                                currency_code: 'EUR',
                            },
                        },
                    ],
                });
            }}

            onApprove={async (data, actions: any) => {
                let order = await actions.order.capture();
            }}

        />
    )
}