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
    description:string;
}

export type Address = {
    street: string | null
    city: string | null
    state: string | null
    postalCode: string | null
    country: string | null
}

export type CartItem = {
    id: number;
    name: string;
    image: string;
    price: number;
    amount: number;
}

export type OrderType = {
    id: number;
    user: string;
    orderProducts: OrderProduct[];
    totalPrice: number;
    date: string;
    status: string;
    address: string;
    postalCode: number;
}

export type OrderProduct = {
    id:number
    quantity:number
    price:number
    product: ProductType
    order: OrderType
}

export type RatingType = {

    user: string
    comment: string
    rating: number
    profileImage: string
    product: ProductType
}

export type CartActionReducer = {
    payload: any;
    type: 'ADD' | 'REMOVE' | 'REMOVE-ALL' | 'CLEAR';
}

export type CartContextType = {
    cartItems: CartItem[],
    dispatch: React.Dispatch<CartActionReducer>
}

export type DeliveryHelper = {
    postalCodeString: string
}