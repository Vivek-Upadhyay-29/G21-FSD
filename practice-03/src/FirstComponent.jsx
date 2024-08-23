import React from "react";
import { useContext } from "react";
import { counterContext } from "./CounterContext";
const FirstComponent = () => {
  const value = useContext(counterContext);
  return (
    <>
      <div>
        <h2>This is 2nd Component</h2>
       <button onClick={()=> value.setCount((count)=> count-1)}><h1> {value.count}  </h1></button>
       
    
      </div>
    </>
  );
};

export default FirstComponent;
