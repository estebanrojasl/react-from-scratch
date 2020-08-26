import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const MyInfo = () => {
  return (
    <div>
      <h1>Esteban Rojas</h1>
      <p>I am fc*ing awesome</p>
      <ul>
        <li>Canada</li>
        <li>Iceland again</li>
        <li>India</li>
      </ul>
    </div>
  );
};

ReactDOM.render(<MyInfo />, document.getElementById("root"));
