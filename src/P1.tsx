import React from "react";
import "react/jsx-runtime"
import "./styles/p1.css";
type Props = {
  time: Date;
};

const ProblemOne = ({ time }: Props) => {
  let hours = time.getHours();
  const timeElement = document.getElementById("time");
  if (timeElement !== null) {
    if (hours >= 0 && hours <= 6) {
        timeElement.className = "night";
    } else {
        timeElement.className = "day";
    }
  }
  return <h1 id="time">{time.toLocaleTimeString()}</h1>;
};

export default ProblemOne;

// Hint Below...

// Rendering is a calculation treat it like a pure function aswell, no side effects
