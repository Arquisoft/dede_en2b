import React from 'react';
import ReactDom from 'react-dom';
import * as paypal from 'paypal-checkout';
import order from '../Order/Order';
import cartTotal from '../../helper/calculateCartTotal';

const PaypalCheckoutButton = () => {
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

    const PaypalButton = paypal.Button.driver('react', {React, ReactDom}); //returning

    //set up a payment
    const payment = (data, actions) => {
        const payment = {
            transactions: [{
                amount: {
                    total: cartTotal.calculateTotal,
                    currency: paypalConf.currency,
                },
            }]
        };
        return actions.payment.create({payment});
    };


    const onAuthorize = (data, actions) => {
        return actions.payment.execute()
            .then(response =>{
                console.log(response);
                alert('Pago procesado correctamente, ID: ${response.id}');
            })
            .catch(error => {
                console.log(error);
                alert('Error al procesar pago con PayPal');
            })
    }

    const onError = (error) =>{
        console.log(error);
        alert('Pago no realizado, vuelva a intentarlo');
    };

    const onCancel = (data, actions) => {
        alert('Pago cancelado');
    };

    return (
        <PaypalButton
            env = {paypalConf.env}
            client = {paypalConf.client}
            payment = {(data, actions) => payment(data, actions)}
            onAuthorize = {(data, actions) => onAuthorize(data, actions)}
            onCancel = {(data, actions) => onCancel(data, actions)}
            onError = {(error) => onError(error)}
            style = {paypalConf.style}
            commit
        />
    ); 
};
export default PaypalCheckoutButton;