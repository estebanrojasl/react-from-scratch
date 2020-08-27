import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  const date = new Date(2020, 5, 12, 10);
  const month = date.getMonth();
  console.log(month);
  const styles = {};

  let quarter = null;

  if (month > 0 && month <= 3) {
    quarter = "first";
    styles.color = "blue";
  } else if (month > 3 && month <= 6) {
    quarter = "second";
    styles.color = "green";
  } else if (month > 6 && month <= 9) {
    quarter = "third";
    styles.color = "yellow";
  } else {
    quarter = "forth";
    styles.color = "gray";
  }

  return (
    <h1 style={styles}>
      Hey, we are in the {`${quarter} quarter`} of the year
    </h1>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
