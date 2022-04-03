import React from "react";
import useOrdersByUser from "../../hooks/useOrdersByUser";
import OrderView from "./OrderView";
import "../Cart/Cart.css";


const ListOrders = () => {

    const orders  = useOrdersByUser();

    return (

        <div className="CartContainer">
            <h2>Your orders</h2>
            <div className="cartDetailsContainer">
                <div className="cartProductInfo">
                    {
                        orders.map(order => (
                            <OrderView
                                key={order.id}
                                order={order}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ListOrders;

