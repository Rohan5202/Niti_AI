import React from "react";
import ReactDOM from "react-dom";
import Slider from "./containers/Slider.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Slider />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
