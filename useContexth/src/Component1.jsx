// component 1

// Component1.js
import { useState } from "react";
import ReactDOM from "react-dom/client";
import Component2 from "./Component2";
import {Numbercontext} from "./NumberContext"; 
function Component1() {
  const [number, setnumber] = useState(1);
function handle(){
setnumber(number+1)
}
  return (
    <Numbercontext.Provider value={number}>
     <h1>{`Hello ${number}!`}</h1>
      <button onClick={handle}>+</button>
      <Component2 />
    </Numbercontext.Provider>
  );
}

export default Component1;