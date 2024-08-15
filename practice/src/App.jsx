import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(11)
function Hhandle(){
  alert("hello bhai");
  console.log("button was clicked");
}
  return (
    <>
    <h1> This is vivek upadhyay</h1>
     <button onClick={()=>{setCount(count +1)}}>{count}</button>
     <button onClick={{Hhandle}}>Click</button>
    </>
  )
}

export default App
