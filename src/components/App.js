
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [output,ouput_function]=useState("");
  const handleChange = (event) => {
      ouput_function(event.target.value); // Update the state with the new input value
    };
  return (
    <div>
       <input onChange={handleChange}></input> 
      {output!=""?<p>Hello, {output}!</p>:output=output}
    </div>
  )
}

export default App
