import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Greeting from "./Greeting.jsx";

function App() {
  const [count, setCount] = useState(0)
  const Handle=()=>{
setCount(count+2);
  }
  return (
    <>
    
      <div >
        <Greeting/>    
        <button onClick={Handle}> +2</button> {count}
        <button onClick={()=>{setCount(count-2)}}>-2 </button>
      </div>
    </>
  );
}

export default App;
