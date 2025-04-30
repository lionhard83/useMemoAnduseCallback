import { useState, memo, useCallback } from "react"

type ProductProps = {
    addProduct: () => void;
}

export const Product = memo((props: ProductProps) => {
    console.log("sto rirenderizzando il prodotto")
    return <><button onClick={props.addProduct} >Aggiungi</button><span> Product </span><br></br></>
})


export const ExampleUseCallback = () => {
    const [counter, setCounter] = useState(0);

    const addProduct = useCallback(() => {
        console.log("sto chiamando add Product con counter  = " + counter);
        setCounter(counter + 1);
    }, [counter]);

    return (<>
        <p>Number of products {counter}</p>
        <Product addProduct={addProduct} />
        <Product addProduct={addProduct} />
        <Product addProduct={addProduct} />
        <Product addProduct={addProduct} />
        <Product addProduct={addProduct} />
    </>)
}