import React, {useState} from 'react';
import './App.css';



//useToggle - custom React hook that allows a component to toggle
// a value between true and false
//import { useState } from "react"
//
//export default App;


//const App: React.FC = () => {
//const [isToggled, toggle] = useToggle();
//
//  return(
//<div>
//  <p> The togle is {isToggled ? 'on' : 'OFF'}</p>
//  <button onClick={toggle}> Toggle </button>
//</div>
//
//  )
//};
//
//export default App;


//2. usePrevious - hook that allows a component to keep track of
// the previous value of a variable


import usePrevious from "./usePrev/usePrev";

const App:React.FC = () => {

  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  return (
      <div>
<p> Corrent value: {count}</p>
        <p> Previous value : {prevCount ?? 'NO'}</p>
        <button onClick={()=> setCount(count + 1)}> Encreaase </button>
      </div>
  );
};

export default App;