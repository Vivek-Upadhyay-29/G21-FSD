import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import File from "./File.jsx";
import Greeting from "./Greeting.jsx";

function App() {
  let name = "vivek";
  let college = "Saffrony insitute of Technology";
  let id = 6453536;
  return (
    <>
      
      <Greeting   name={"vivek"}
        college={"Saffrony insitute of Technology"}
        id={6453536} />
    </>
  );
}

export default App;
