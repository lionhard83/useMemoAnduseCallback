import axios from "axios"
import { useEffect, useState, memo, useCallback } from "react"

type Rating = {
    rate: number;
    count: number;
  };
  
export type Product = {
id: number;
title: string;
price: number;
description: string;
category: string;
image: string;
rating: Rating;
};

export const ProductCard = memo((props: {product: Product, increment: (value: number) => void, decrement: (value: number) => void}) => {
    console.log("si ri-renderizza");
    return (<div style={{border: '2px solid gray', margin: '2px'}}>
        <img style={{width: 200, height: 200}} src={props.product.image}></img>
        <p>{props.product.title}</p>
        <span>{props.product.price}</span>
        <button onClick={() => props.decrement(props.product.price)}>-</button>
        <button onClick={() => props.increment(props.product.price)}>+</button>
    </div>)
})
  

export const ContainerProducts = () => {
    const [finalPrice, setFinalPrice] = useState(0);

    const decrement = useCallback((value: number) => {
        setFinalPrice(finalPrice - value);
    }, [finalPrice])

    const increment = useCallback((value: number) => {
           setFinalPrice(finalPrice + value);
    }, [finalPrice])

    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        axios.get<Product[]>('https://fakestoreapi.com/products')
        .then((response) => {
            setProducts(response.data);
        })
    }, [])

    return (<>
        <span style={{border: '2px solid red', margin: '2px', fontSize: 40}}>{finalPrice}</span>
        {products.map(item => <ProductCard decrement={decrement} increment={increment} product={item}></ProductCard>)}
    </>)



}