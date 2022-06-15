import React from "react";
import "./App.css";
import Temperature from "./Components/Temperature";

function App() {
  let temp = "70";

  return (
    <ul id="tempBox">
      <Temperature temp={temp}></Temperature>
    </ul>
  );
}

export default App;
