import {PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { calculateTotal } from '../../helper/calculateCartTotal';
import React, { useContext } from "react";
import {CartContext} from "../CartContext";
import {GetDeliveryCost, setLastDeliveryCost} from "../../helper/calculateDeliveryCost";

//
const sandboxId = 'AZl80cnJ3GAjahCeDby4Hw7amZs3fr-C1gUfC5pkIu6z_i3GinKI8KhCcg1BcRsDVn1ms0WwaVD7uHDY';

type PaypalButtonProps = {
    payed: () => void;
}

export default function PaypalButton(props: PaypalButtonProps) : JSX.Element {
    const {cartItems} = useContext(CartContext);
    const [deliveryCost, setDeliveryCost] = React.useState(0);
    const getDeliveryCost = async () => setDeliveryCost(await GetDeliveryCost());
    getDeliveryCost();

    const subTotal = (+calculateTotal(cartItems).toFixed(2) + +deliveryCost).toFixed(2);
    setLastDeliveryCost(deliveryCost);

    if (deliveryCost != 0) {
        return (
            <PayPalScriptProvider options={{"client-id": sandboxId}}>
                <PayPalButtons
                    style={{
                        color: 'white',
                        shape: 'pill',
                        label: 'pay',
                    }}

                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [{
                                amount: {
                                    value: subTotal,
                                    currency_code: "USD",
                                },
                            },],
                        });
                    }}

                    onApprove={async (data, actions: any) => {
                        await actions.order.capture();
                        props.payed();
                    }}

                    onCancel={(data, actions) => {
                        alert('Pago cancelado');
                    }}

                    onError={(error) => {
                        console.log(error);
                        alert('Pago no realizado, vuelva a intentarlo');
                    }}
                />
            </PayPalScriptProvider>

        )
    } else {
        return (
            <p> The payment is being generated... please wait </p>
        )
    }
}
