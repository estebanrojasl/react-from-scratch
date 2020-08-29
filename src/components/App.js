import React from "react";
import Joke from "./Joke";

const App = () => {
  return (
    <div>
      <Joke question="Wtf?" punchLine="Bitch please" />
      <Joke
        question="How much money does a pirate pay for corn? "
        punchLine="A buccaneer"
      />
      <Joke punchLine="I'm a big fan of whiteboards. I find them quite re-markable." />
    </div>
  );
};

export default App;
