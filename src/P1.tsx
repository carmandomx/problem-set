import React from "react";
import "./styles/p1.css";
type Props = {
  time: Date;
};

const ProblemOne = ({ time }: Props) => {
  let hours = time.getHours();
  let timeClass = 'day';

  // Evaluate if it's night, send data to the html component
  if (hours >= 0 && hours <= 6) {
    timeClass = "night";
  }

  return <h1 id="time" className={timeClass}>{time.toLocaleTimeString()}</h1>;
};

export default ProblemOne;

// Hint Below...

// Rendering is a calculation treat it like a pure function aswell, no side effects
