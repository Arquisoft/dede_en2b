import { PayPalButtons } from "@paypal/react-paypal-js";
import { calculateTotal } from '../../helper/calculateCartTotal';

//
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

    const totalString = calculateTotal.toString();

    return (
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
                let order = await actions.order.capture();
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
    )
}