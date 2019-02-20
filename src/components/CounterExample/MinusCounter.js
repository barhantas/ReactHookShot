import React, { useState } from "react";

const MinusCounter = ({ minusCount }) => {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count - 1);
          minusCount();
        }}
      >
        Click me (-)
      </button>
    </div>
  );
};
export default MinusCounter;
