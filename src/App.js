import React from "react";

function handleClick() {
  console.log("I was clicked");
}

function App() {
  return (
    <div>
      <img
        onMouseOver={() => console.log("Hovered over")}
        src="https://www.fillmurray.com/200/100"
        alt=""
      />
      <br />
      <br />
      <button onMouseOver={handleClick}>Click me</button>
    </div>
  );
}

export default App;
