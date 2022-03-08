import {CartActionReducer, CartItem} from "../shared/shareddtypes";

const cartReducer = (state: CartItem[], action: CartActionReducer) => {

    switch (action.type) {
        case "ADD":
            const existProduct = state.find(item => item.id === action.payload.id);
            if (existProduct) {
                return state.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            amount: item.amount + 1
                        }
                    }
                    return item;
                })
            } else {
                const {id, name, image, price } = action.payload;
                return [...state, {id, name, image, price, amount:1 }];
            }
        case "REMOVE":
            return state.reduce((accumulator, item) => {
                if (item.id === action.payload) {
                    if (item.amount === 1) return accumulator;
                    else return [...accumulator, {...item, amount: item.amount - 1}]
                }
                return [...accumulator, item];
            }, [] as CartItem[]);
        case "REMOVE-ALL":
            return state.filter(item => item.id !== action.payload);
        case "CLEAR":
            return [];
        default:
            return state;
    }
}

export default cartReducer;