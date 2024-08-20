import React from "react";

function Greeting(props) {
  return (
    <div>
     
       <h2> name : {props.name}</h2> 
       <h2> college = {props.college}</h2> 
       <h2> ID = {props.id}</h2> 
      
    </div>
  );
}

export default Greeting;
