import { useReducer } from "react";

type Action = {
    type: 'increment' | 'decrement' | 'reset';
}

const reducer = (state: number, action: Action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return Math.max(0, state - 1);
        case 'reset':
            return 0;
        default:
            throw new Error('Unknown action type');
    }
}


export const ExampleUseReducer = () => {
    const [count, setCountByAction] = useReducer(reducer, 0);

    return (<>
        <p>{count}</p>
        <button onClick={() => setCountByAction({type: 'increment'})}>Increment</button>
        <button onClick={() => setCountByAction({type: 'decrement'})}>Decrement</button>
        <button onClick={() => setCountByAction({type: 'reset'})}>Reset</button>
    </>)
}