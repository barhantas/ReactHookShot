import React, { useState } from "react";

const PlusCounter = ({ plusCount }) => {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
          plusCount();
        }}
      >
        Click me (+)
      </button>
    </div>
  );
};
export default PlusCounter;
