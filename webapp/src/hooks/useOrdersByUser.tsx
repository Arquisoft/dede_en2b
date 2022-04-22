import {useEffect, useState} from "react";
import {OrderType} from "../shared/shareddtypes";
import {getOrdersForUser} from "../api/api";
import {useSession} from "@inrupt/solid-ui-react";
import {stringToHexadecimal} from "../helper/stringToHexadecimal";

const useOrdersByUser = () => {
    const {session} = useSession();
    const [orders, setOrders] = useState<OrderType[]>([]);

    let webId:string = stringToHexadecimal(session.info.webId!);

   

    useEffect(() => {
        const getOrders = async () => {
            setOrders(await getOrdersForUser(webId));
        }
    }, []);

    return orders;
}

export default useOrdersByUser;