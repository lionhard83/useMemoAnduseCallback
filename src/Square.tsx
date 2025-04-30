import { PropsWithChildren } from "react";

type SquareAttrProps = {
    color: string;
    textColor: string;
    text: string;
}


export const Square = ({textColor, text, color, children}: PropsWithChildren<SquareAttrProps>) => {
    console.log("sono dentro square");
    return (<div style={{height: '100px', width: '100px', backgroundColor: color}}>
        <p style={{color: textColor}}><b>{text}</b></p>
        {children}
    </div>)
}