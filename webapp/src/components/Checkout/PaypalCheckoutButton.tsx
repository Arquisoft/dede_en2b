import React from 'react';
import ReactDom from 'react-dom';
import paypal from 'paypal-checkout';
import { calculateTotal } from '../../helper/calculateCartTotal';

const PayPalButton = paypal.Buttons.driver("react", { React, ReactDom });

function PaypalCheckoutButton() {
    const paypalConf = {
        //configure the environment
        currency: 'EUR',
        env: 'sandbox',
        client: {
            sandbox: 'AZl80cnJ3GAjahCeDby4Hw7amZs3fr-C1gUfC5pkIu6z_i3GinKI8KhCcg1BcRsDVn1ms0WwaVD7uHDY',
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
            .then(response => {
                console.log(response);
                alert('Pago procesado correctamente, ID: ${response.id}');
            })
            .catch((Error: any)  => {
                console.log(Error);
                alert('Error al procesar pago con PayPal');
            });
    };

    const onError = (Error: any) => {
        console.log(Error);
        alert('Pago no realizado, vuelva a intentarlo');
    };

    const onCancel = (data, actions) => {
        alert('Pago cancelado');
    };

    return (
        <PaypalButton
            env={paypalConf.env}
            client={paypalConf.client}
            payment={(data, actions) => payment(data, actions)}
            onAuthorize={(data, actions) => onAuthorize(data, actions)}
            onCancel={(order : any, actions) => onCancel(order, actions)}
            onError={(error : any) => onError(error)}
            style={paypalConf.style}
            commit />
    );
}
export default PaypalCheckoutButton;