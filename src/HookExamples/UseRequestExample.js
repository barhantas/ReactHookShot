import React from "react";
import useRequestExampleState from "../states/useRequestExampleState";

const UseRequestExample = () => {
  const { id, setId, response, loading, error } = useRequestExampleState(
    "https://jsonplaceholder.typicode.com/posts/",
    "1"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  if (!response) return null;

  const { title, body } = response.data;

  return (
    <React.Fragment>
      <h1>Dummy API - UseRequest Example</h1>
      {id && <p>Query for : {id}</p>}

      <input
        className="input-underline"
        placeholder="please enter id example:1"
        onChange={e => {
          setId(e.target.value);
        }}
      />
      <p>{title}</p>
      <p>{body}</p>
    </React.Fragment>
  );
};
export default UseRequestExample;
