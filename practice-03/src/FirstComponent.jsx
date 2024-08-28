import React from "react";
import { useContext } from "react";
import { counterContext } from "./CounterContext";
const FirstComponent = () => {
  const value = useContext(counterContext);
  return (
    <>
      <div  className="container" style={{backgroundColor:'blue',padding:'20px'}}> 
        <h2>This is 1st  Component</h2>
       <button onClick={()=> value.setCount((count)=> count-1)}><h1> {value.count}  </h1></button>
       
    
      </div>
    </>
  );
};

export default FirstComponent;
