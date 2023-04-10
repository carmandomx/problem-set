import React from "react";
import "./styles/p1.css";
type Props = {
  time: Date;
};

const ProblemOne = ({ time }: Props) => {
  let hours = time.getHours();
  const nullElement = document.getElementById("time");
  if (nullElement !== null) {
    if (hours >= 0 && hours <= 6) {
      nullElement.className = "night";
    } else {
      nullElement.className = "day";
    }
  }

  return <h1 id="time">{time.toLocaleTimeString()}</h1>;
};

export default ProblemOne;

// Hint Below...

// Rendering is a calculation treat it like a pure function aswell, no side effects
