// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useState } from 'react';
import './App.css'
import { SuperArea } from './SuperArea';
// import { Square } from './Square';
// import { Square } from './Square';



export const App = () => {
  console.log("sono dentro lo scope di App")
  // const [x, setX] = useState(0);

  // const ref = useRef<HTMLInputElement>(null)
  // const [valueInInput, setValueInInput] = useState(0);
  // const [y, setY] = useState<string[]>([]);
  // const x = arr[0];
  // const setX = arr[1];
  // const colors = [{
  //   color: "yellow", 
  //   text: "Ciao", 
  //   textColor: "blue",
  //   value: <h1>Ciao</h1>
  // }, 
  //   {color: "blue", 
  //     text: "Ciao", 
  //     textColor: "yellow",
  //     value: <h2>Ciao</h2>
  //   }];
  // interpolazione
  return (
    <div className='card'>
      {/* <button onClick={() => setX(x + 1)} >Increment</button>
      <button onClick={() => setX(x - 1)} >Decrement</button>
      <button onClick={() => setX(Number(ref.current?.value))} >Set</button>
      <input ref={ref} id='inputValue' defaultValue={x} type='number'></input>
      <p>x:{x}</p>
      <br></br>
      <br></br>
      <br></br> */}
      <SuperArea />
      
      {/* {colors.map(({color, textColor, text, value}) => 
        <Square color={color} text={text} textColor={textColor}>
          {value}
        </Square>)} */}
    </div>);
}

