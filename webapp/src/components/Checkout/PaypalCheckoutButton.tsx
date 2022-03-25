import React from 'react';
import ReactDom from 'react-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { calculateTotal } from '../../helper/calculateCartTotal';
import Order from '../Order/Order';

const sandboxId = 'AZl80cnJ3GAjahCeDby4Hw7amZs3fr-C1gUfC5pkIu6z_i3GinKI8KhCcg1BcRsDVn1ms0WwaVD7uHDY';

export default function PaypalCheckoutButton() : JSX.Element {
    const paypalConf = {
        //configure the environment
        currency: 'EUR',
        env: 'sandbox',
        client: {
            sandbox: sandboxId,
            production: '-- id --', // This is empty
        },
        style: {
            color: 'white',
            shape: 'pill',
            size: 'medium',
            label: 'pay',
        }
    };

    //set up a payment
    const createOrder = () => { 
        return (calculateTotal);
    }


    const onAuthorize = (data, actions) => {
        return actions.payment.execute()
            .then((response: Response) => {
                console.log(response);
                alert('Pago procesado correctamente, ID: ${response.id}');
            })
            .catch((error : Error) => {
                console.log(Error);
                alert('Error al procesar pago con PayPal');
            });
    };

    const onCancel = (data, actions) => {
        alert('Pago cancelado');
    };

    return (
        <PayPalButtons
            env={paypalConf.env}
            client={paypalConf.client}
            payment={(data, actions) => payment(data, actions)}
            onAuthorize={(data, actions) => onAuthorize(data, actions)}
            onCancel={(order : Order, actions) => onCancel(order, actions)}
            onError={(error : any) => onError(error)}
            style={paypalConf.style}
            commit />
    );
}