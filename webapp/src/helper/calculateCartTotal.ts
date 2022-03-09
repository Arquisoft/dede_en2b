import {CartItem} from "../shared/shareddtypes";

export const calculateTotal = (cartItems: CartItem[]): number => {
    return cartItems.reduce((accumulator: number, item: CartItem) => accumulator + (item.amount * item.price), 0);
}

export const getTotalItemsNumber = (cartItems: CartItem[]): number => {
    return cartItems.reduce((accumulator: number, item: CartItem) => accumulator + item.amount, 0);
}