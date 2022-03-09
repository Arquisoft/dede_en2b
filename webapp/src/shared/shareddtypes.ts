import React from "react";

export type User = {
    name:string;
    email:string;
}

export type ProductType = {
    id: number;
    name:string;
    category:string;
    price:number;
    image:string;
}

export type CartItem = {
    id: number;
    name: string;
    image: string;
    price: number;
    amount: number;
}

export type CartActionReducer = {
    payload: any;
    type: 'ADD' | 'REMOVE' | 'REMOVE-ALL' | 'CLEAR';
}

export type CartContextType = {
    cartItems: CartItem[],
    dispatch: React.Dispatch<CartActionReducer>
}