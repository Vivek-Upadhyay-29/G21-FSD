// component 3

// Component3.js
import { useContext, useState } from "react";
import {Numbercontext} from "./NumberContext"; // Import UserContext

function Component3() {
  const number = useContext(Numbercontext);
  const [numm,setnumbere] = useState(number);
 function redeee(){
  setnumbere(numm-1);
 }

  return (
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${number} again!`} 

        I am changing from component 3
      </h2>
      <button onClick={redeee}>-</button> 
    </>
  );
}

export default Component3;