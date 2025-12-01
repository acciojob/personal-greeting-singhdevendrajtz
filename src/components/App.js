
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [output,ouput_function]=useState("");
  const handleChange = (event) => {
      ouput_function(event.target.value); // Update the state with the new input value
    };
  return (
    <div>
    <p>Enter your name:</p>
       <input onChange={handleChange} value={output}></input> 
      {output!=""?<p>Hello, {output}!</p>:null}
    </div>
  )
}

export default App
