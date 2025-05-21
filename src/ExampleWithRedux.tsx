import { ListProducts } from "./ListProducts"
import { orderByPrice } from "./store/productsSlice";
import {  useDispatch } from "react-redux"

export const ExampleWithRedux = () => {
    const dispatch = useDispatch();
    return (<>
            <h1>Example with Redux</h1>
            <ListProducts />
            <button onClick={() => dispatch(orderByPrice())}>Order By Price</button>
            {/* <Theme />
            <Counter />    */}
    </>)
}