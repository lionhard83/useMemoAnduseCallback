import { useEffect, useState } from "react"

export const SuperArea = () => {
    console.log("rirenderizzazioni");
    
    const [isOverLength, setIsOverLength] = useState(false);

    useEffect(() => console.log("si è verificato qualcosa")); 

    const limit = 40;
    
    
    return (
        <>
        <textarea onChange={(event) => event.target.value.length > limit ? setIsOverLength(true) : setIsOverLength(false)}  style={{ border: `4px solid ${isOverLength} ? 'red': 'transparent')`}}  cols={36} rows={10}>

        </textarea>
        <p>{isOverLength}</p>
        {isOverLength && <p>Hai superato il limite dei caratteri</p>}
    </>  
)
}