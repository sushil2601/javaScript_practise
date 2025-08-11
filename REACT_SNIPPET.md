/* -----------------------------React Snippet ----------------------------------- */

//Q1.

 <!-- import { useState } from "react";

 const Counter1 = () => {
   const [count, setCount] = useState(0);

   setCount(count + 1);

  return <p>{count}</p>;
 };

 export default Counter1; -->

 <!-- The problem here is that you’re calling setCount directly inside the component’s main body
  
  Here’s what’s happening step-by-step:

Component mounts → count starts at 0.

The line setCount(count + 1) runs immediately.

Calling setCount updates state → React triggers a re-render.

On the next render, the code runs again → setCount is called again → triggers another render.

This loop continues forever until React stops it and shows -->


//Q2.

<!-- import { useState } from "react";

const Counter2 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Count</button>
    </div>
  );
};

export default Counter2; -->

 
 <!-- This version doesn’t cause an infinite loop because setCount is not called automatically during the render phase — it’s only called when you click the button.
setCount is only called in response to a user event (button click), not on every render.
Since state updates are triggered only by interaction, the loop ends after each click. -->
 

//Q3.

<!-- import { useEffect, useState } from "react";

export const Counter3 = () => {
  const [count1, setCount1] = useState(0);

  let count = 0;

  const handler = () => {
    count = count + 1;
    console.log(count);
  };

  return <p onClick={handler}>{count}</p>;
}; -->

//Q4.

<!-- export const Counter4 = () => {
  const [count1, setCount1] = useState(0);

  let count = 0;

  const handler = () => {
    // count = count + 1;
    // console.log(count);
    setCount1((prev) => prev + 1);
  };

  useEffect(() => {
    setCount1((prev) => (prev + count));
  }, []);

  return <p onClick={handler}>{count1}</p>;
}; -->

Q. 



