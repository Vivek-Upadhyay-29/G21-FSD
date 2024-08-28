import React, { useEffect, useRef, useState } from "react";

function Third() {
  const [name, setName] = useState("Tony");
  const [age, setAge] = useState(25);
const rednderCount  = useRef(0);

useEffect(()=>{

    rednderCount.current = rednderCount.current+2
})
  return (
    <div className="container" style={{backgroundColor:'red'}}>
        <h1>This is third Component</h1>
      <input
        type="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br/>      <br/>

      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <h1> {rednderCount.current}</h1>
    </div>
  );
}

export default Third;
