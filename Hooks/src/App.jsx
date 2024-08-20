import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const Add=()=>{
  setCount(count+1);
}
const Subtract=()=>{
  setCount(count-1);
}
  return (
    <>
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={Add}>
          +   
        </button>
        count is {count}
       <button onClick={Subtract}>-</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
