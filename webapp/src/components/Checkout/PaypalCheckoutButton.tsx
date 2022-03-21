import React from 'react';
import ReactDom from 'react-dom';
import paypal from 'paypal-checkout';

const PaypalCheckoutButton = (order) => {
    const paypalConf = {
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

    const payment = (data, actions) => {
        const payment = {
            transactions: [
                {
                    amount: {
                        total: order.total,
                        currency: paypalConf.currency,
                    },
                    descripcion: 'Pagar',
                    custom: order.custom || '',
                    item_list: {
                        items: order.items
                    }
                }
            ]
        };
        return actions.payment.create({payment});
    };

    const onAuthorize = (data, actions) =>{
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
            onError = {(error) => onAuthorize(error)}
            style = {paypalConf.style}
            commit
        />
    ); 
};
export default PaypalCheckoutButton;