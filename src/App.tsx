import React, { useState } from "react";
import ProblemOne from "./P1";
import ProblemTwo from "./P2";
import ProblemThree from "./P3";
import useTime from "./helpers/time";
import "./App.css";

let initialStories = [
  { id: 0, label: "Ankit's Story" },
  { id: 1, label: "Taylor's Story" },
];

function App() {
  let [stories, setStories] = useState([...initialStories]);
  const time = useTime();

  // If you read this, this is not a good thing to do
  if (stories.length > 100) {
    stories.length = 100;
  }

  return (
    <div className="App">
      <h2>Problem No. 1</h2>
      <ProblemOne time={time} />
      <h2>Problem No. 2</h2>
      <ProblemTwo />
      <h3>Problem No. 3</h3>
      <ProblemThree stories={stories} />
    </div>
  );
}


export default App;
