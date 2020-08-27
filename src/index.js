import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  const date = new Date();
  const month = date.getMonth;

  let quarter = null;

  if (month > 0 && month <= 3) {
    quarter = "first";
  } else if (month > 3 && month <= 6) {
    quarter = "second";
  } else if (month > 6 && month <= 9) {
    quarter = "third";
  } else {
    quarter = "forth";
  }
  return <h1>Hey, we are in the {`${quarter} quarter`} of the year</h1>;
};

ReactDOM.render(<App />, document.getElementById("root"));
