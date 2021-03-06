import React, { useState } from "react";
import CounterExample from "../HookExamples/CounterExample";
import TodoListExample from "../HookExamples/TodoListExample";
import SimpleUseEffectExample from "../HookExamples/SimpleUseEffectExample";
import UseRequestExample from "../HookExamples/UseRequestExample";

const MainContainer = () => {
  const initialValue = [
    UseRequestExample,
    CounterExample,
    TodoListExample,
    SimpleUseEffectExample,
  ];
  const [examples] = useState(initialValue);

  return (
    <div className="main-container">
      {examples.map((example, index) => (
        <div key={index} className="example-box">
          {example()}
        </div>
      ))}
    </div>
  );
};
export default MainContainer;
