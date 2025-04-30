import { useState, memo } from "react";

type OtherComponentProps = {
    search: string
}

// Funzione di confronto personalizzata
const arePropsEqual = (prevProps: OtherComponentProps, nextProps: OtherComponentProps) => {
    // Re-renderizza il componente solo se il testo delle props cambia
    return prevProps.search.trim() === nextProps.search.trim();
    };

export const OtherComponent = memo((props: OtherComponentProps) => {
    console.log("rirenderizzo?")
    const arr = ["pippo", "caio", "sempronio"];
    return (<>
        {arr.filter(item =>  item.includes(props.search.trim())).map(item => <p>{item}</p>)}
    </>)
}, arePropsEqual)


export const ExampleMemo = () => {
    const [search, setSearch] = useState('');
    

    return(<>
        <p>Example Memo</p>
        <input onChange={(event) => setSearch(event.target.value)} />
        <OtherComponent search={search} />
    </>)
}