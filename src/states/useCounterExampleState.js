import { useState } from "react";

export default initialValue => {
  const [counter, setCount] = useState(initialValue);

  return {
    counter,
    plusCount: () => setCount(counter + 1),
    minusCount: () => setCount(counter - 1)
  };
};
