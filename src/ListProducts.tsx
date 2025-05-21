import axios from "axios";
import { useEffect } from "react"
import { Product } from "./models/Product";
import { useDispatch, useSelector } from "react-redux";
import { addPreferite, set } from "./store/productsSlice";
import { State } from "./store/store";



export const ListProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: State) => state.products.value);

    useEffect(() => {
        axios.get<Product[]>('https://fakestoreapi.com/products')
            .then((response) => {
                dispatch(set(response.data));
            })
    }, [])
    

    return (
        <div>
            <h1>List Products</h1>
            <p>List of products will be displayed here.</p>
            <ul>
                {products.map((item) => (
                    <>
                    <li>{item.title} {item.price} </li><button onClick={() => { console.log("la chiamo"); addPreferite(item.id)}}>Add to Prefer</button>
                    </>))}
            </ul>
        </div>
    )
}