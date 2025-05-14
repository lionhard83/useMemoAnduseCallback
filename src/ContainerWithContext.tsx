import { createContext, useState } from "react";
import { TitleAndSubTitle } from "./TitleAndSubtitle";



export const ThemeContext = createContext<'light' | 'dark'>('light')

export const ContainerWithContext = () => {
    const [state, setState] = useState<'light' | 'dark'>('light');
    return (
        <ThemeContext.Provider value={state}>
            <div style={{backgroundColor: state === 'light' ? 'white' : 'black'}}>
                <button onClick={() => setState(state === 'light' ? 'dark': 'light')}>{state}</button>
                <TitleAndSubTitle />
            </div>
        </ThemeContext.Provider>
    );
}