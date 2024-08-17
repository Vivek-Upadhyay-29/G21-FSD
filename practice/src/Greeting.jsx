import React from "react";

function Greeting(props) {
  return (
    <div>
      <h1>
        name : {props.name}, college = {props.college}, ID = {props.id}
      </h1>
    </div>
  );
}

export default Greeting;
