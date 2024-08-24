import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Component } from "react";
import SecondComponent from "./SecondComponent";
import { counterContext } from "./CounterContext";
import FirstComponent from "./FirstComponent";

function App() {
  const [count, setCount] = useState(0);
  const [name,setName] = useState('');
  const renderCount = useRef(0)


  useEffect(()=>{
    renderCount.current = renderCount.current +1
  })

  return (
    <>
      <counterContext.Provider value={{count,setCount}}>
        <h1>This is main component</h1>
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          <h1
            style={{
              backgroundColor: "red",
              fontSize: "32px",
              padding: "10px",
            }}
          >
            Add +1
          </h1>
          <h1>{count}</h1>
        </button>
        <FirstComponent />
        <SecondComponent />
      </counterContext.Provider>
      <h1>
    <input value={name} onChange={e=> setName(e.target.value)}/>
    <div> My name is : {name} {renderCount.current} </div>    </h1>
    

    </>
  );
}

export default App;
