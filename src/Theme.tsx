import { useDispatch, useSelector } from "react-redux"
import { State } from "./store/store";
import { toggle } from "./store/themeSlice";


export const Theme = () => {
    console.log("sto rirenderizzando theme?");
    const theme = useSelector((state: State) => state.theme.value);
    const dispatch = useDispatch();
    return <>
        <span>Current Theme: {theme}</span>
        <button onClick={() => dispatch(toggle())}>Toggle</button>
</>
}