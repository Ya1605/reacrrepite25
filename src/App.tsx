import React, {useState} from 'react';
import './App.css';
import useToggle from "./hookToggle/useToggle";


//useToggle - custom React hook that allows a component to toggle
// a value between true and false
    //import { useState } from "react"
    //
    //export default App;



//2. usePrevious - hook that allows a component to keep track of
// the previous value of a variable



const App: React.FC = () => {
const [isToggled, toggle] = useToggle();

  return(
<div>
  <p> The togle is {isToggled ? 'on' : 'OFF'}</p>
  <button onClick={toggle}> Toggle </button>
</div>

  )
};

export default App;