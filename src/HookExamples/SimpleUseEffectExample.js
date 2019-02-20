import React, { useState, useEffect } from "react";

const SimpleUseEffectExample = () => {
  const initialValue = "Stranger";
  const [name, setName] = useState(initialValue);

  useEffect(() => {
    document.title = `Hi ${name || initialValue}`;
    return () => console.warn("cleanup worked");
  }, [name]);

  return (
    <React.Fragment>
      <h1>Simple Personal Tab (useEffect) Example</h1>
      <p>Hi {name || initialValue}</p>
      <input
        className="input-underline"
        placeholder="please enter your name"
        onChange={e => setName(e.target.value)}
      />
    </React.Fragment>
  );
};
export default SimpleUseEffectExample;
