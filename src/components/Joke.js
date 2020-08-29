import React from "react";

const Joke = (props) => {
  return (
    <div style={{ padding: "1rem" }}>
      <h2 style={{ display: props.question ? "block" : "none" }}>
        Question: {props.question}
      </h2>
      <h2>Answer: {props.punchLine}</h2>
    </div>
  );
};

export default Joke;
