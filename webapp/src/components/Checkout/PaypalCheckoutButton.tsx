import {PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { calculateTotal } from '../../helper/calculateCartTotal';
import { useContext } from "react";
import {CartContext} from "../CartContext";
import paypal from "@paypal/paypal-js";

//
const sandboxId = 'AZl80cnJ3GAjahCeDby4Hw7amZs3fr-C1gUfC5pkIu6z_i3GinKI8KhCcg1BcRsDVn1ms0WwaVD7uHDY';


export default function PaypalButton() : JSX.Element {
    const {cartItems} = useContext(CartContext);
    const subTotal = calculateTotal(cartItems).toFixed(2); // ADD SHIPPING COST
    const totalString =  subTotal.toString();

    return (
        <PayPalScriptProvider options={{ "client-id": sandboxId }}>
            <PayPalButtons
                style = {{
                    color : 'white',
                    shape : 'pill',
                    label : 'pay',
                }}

                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: totalString,
                                currency_code: 'EUR',
                            },
                        },],
                    });
                }}

                onCancel = {(data, actions) => {
                    alert('Pago cancelado');
                }}
    
                onApprove={async (data, actions: any) => {
                    let order = await actions.redirect('https://www.paypal.com/sdk/js?client-id=AZl80cnJ3GAjahCeDby4Hw7amZs3fr-C1gUfC5pkIu6z_i3GinKI8KhCcg1BcRsDVn1ms0WwaVD7uHDY');
                }}

                createSubscription =  {(data, actions) => {
                    return actions.subscription.create({
                        plan_id : sandboxId,
                        quantity : totalString,
                    })
                }}
    
                onError = {(error) => {
                    console.log(error);
                    alert('Pago no realizado, vuelva a intentarlo');
                }}
            />
        </PayPalScriptProvider>
    )
}