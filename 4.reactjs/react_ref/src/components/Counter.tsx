import { useState, useRef } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const myRef = useRef(0);
  const handleIncrement = () => {
    // setCount(count + 1);
    myRef.current++;
    // console.log(myRef);
  };

  return (
    <div>
      <h1>Count: {myRef.current}</h1>
      <button onClick={handleIncrement}>Up</button>
    </div>
  );
}

//ref: {current: value}
