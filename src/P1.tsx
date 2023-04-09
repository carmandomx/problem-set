import React from "react";
import "./styles/p1.css";
type Props = {
  time: Date;
};

const ProblemOne = ({ time }: Props) => {
  let hours = time.getHours();
  // Declare variable to store the class
  let classname: string;
  if (hours >= 0 && hours <= 6) {
    // Add class night
    classname = "night";
  } else {
    // Or add class day depending on the hour
    classname = "day";
  }

  return (
    <h1 className={classname} id="time">
      {time.toLocaleTimeString()}
    </h1>
  );
};

export default ProblemOne;

// Hint Below...

// Rendering is a calculation treat it like a pure function aswell, no side effects
