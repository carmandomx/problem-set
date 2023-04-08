import React from "react";
import "./styles/p1.css";
type Props = {
  time: Date;
};

const ProblemOne = ({ time }: Props) => {
  let hours = time.getHours();
  let classNamep1 = ""

  if (hours >= 0 && hours <= 6) {
    classNamep1 = "night";
  } else {
    classNamep1 = "day";
  }
  return <>
  <h1 className = {classNamep1}>{time.toLocaleTimeString()}</h1>
  </>;
};

export default ProblemOne;

// Hint Below...

// Rendering is a calculation treat it like a pure function aswell, no side effects


//first npm install
//let's make the if statement easier or pure
//Now it works