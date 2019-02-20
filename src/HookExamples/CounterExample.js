import React from "react";
import PlusCounter from "../components/CounterExample/PlusCounter";
import MinusCounter from "../components/CounterExample/MinusCounter";
import useCounterExampleState from "../states/useCounterExampleState";

const CounterExample = () => {
  const { counter, plusCount, minusCount } = useCounterExampleState(0);

  return (
    <React.Fragment>
      <h1>Counter Example</h1>
      Total Count : {counter}
      <PlusCounter plusCount={plusCount} />
      <MinusCounter minusCount={minusCount} />
    </React.Fragment>
  );
};
export default CounterExample;
