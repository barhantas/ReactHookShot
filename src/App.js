import React from "react";
import "./App.css";
import MainContainer from "./containers/MainContainer";

const App = () => {
  return (
    <div className="App">
      <header className="App-header"> Welcome to React Hooks Examples</header>
      <div className="App-body">
        <MainContainer />
      </div>
      <footer className="App-footer">C@ Created by Baris Hantas</footer>
    </div>
  );
};

export default App;
