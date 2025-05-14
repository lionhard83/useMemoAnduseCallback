import { useEffect, useReducer, useState } from "react";
import { Product } from "./ContainerProducts";
import axios from "axios";

export type ProductWithQuantity = Product & { quantity: number };
export type Action = {
    type: 'add' | 'remove';
    payload: Product;
} | {
    type: 'reset';
}

export type Cart = {
    products: ProductWithQuantity[];
    totalPrice: number;
}

const reducer = (state: Cart, action: Action) => {
    switch (action.type) {
        case 'add':
            { const existingProduct = state.products.find(item => item.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.products.push({...action.payload, quantity: 1});
            }
            
            state.totalPrice = Number(state.products.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2));
            return {...state}; }
        case 'remove':
            { const existingProduct = state.products.find(item => item.id === action.payload.id);
                if (existingProduct) {
                    existingProduct.quantity -= 1;
                }
                state.products = state.products.filter(item => item.quantity > 0);
                state.totalPrice = Number(state.products.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2));
                return {...state}; }
        case 'reset':
            return {products: [], totalPrice: 0};
        default:
            throw new Error('Unknown action type');
    }
}


export const ExampleUseReducerCart = () => {
    const [cart, setCartByAction] = useReducer(reducer, {products: [], totalPrice: 0});
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        axios.get<Product[]>('https://fakestoreapi.com/products')
        .then((response) => {
            setProducts(response.data);
        })
    }, [])

    return (<>
        <p>Cart</p>
        <button onClick={() => setCartByAction({type: 'reset'})}>Reset</button>
        {cart.products.map(item => (<div>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
                </div>))}
        <span style={{border: '2px solid red', margin: '2px', fontSize: 40}}>{cart.totalPrice}</span>
        {products.map(item => (<div>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <button onClick={() => setCartByAction({type: 'add', payload: item})}>Add</button>
                <button disabled={Boolean(!cart.products.find(itemInCart => itemInCart.id === item.id))} onClick={() => setCartByAction({type: 'remove', payload: item})}>Remove</button>
                </div>))}
    </>)
}