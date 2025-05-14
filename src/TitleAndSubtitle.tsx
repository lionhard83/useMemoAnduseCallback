import { useContext } from "react";
import { ThemeContext } from "./ContainerWithContext";


export const TitleAndSubTitle = () => {
    const theme = useContext(ThemeContext);
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 style={{color: theme === 'light' ? 'gray': 'white'}} className="text-4xl font-bold text-gray-800">Welcome to My Website</h1>
            <p  style={{color: theme === 'light' ? 'gray': 'white'}} className="mt-2 text-lg text-gray-600">Your one-stop solution for all your needs</p>
        </div>
    );
}