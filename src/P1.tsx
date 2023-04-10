import React from "react";
import "./styles/p1.css";
type Props = {
  time: Date;
};

const ProblemOne = ({ time }: Props) => {
  let hours = time.getHours();
  if (hours >= 0 && hours <= 6) {;
    return <h1 id="time" className="night">{time.toLocaleTimeString()}</h1>
  } else {
    return <h1 id="time" className="day">{time.toLocaleTimeString()}</h1>
  }
};

export default ProblemOne;

// Hint Below...

// Rendering is a calculation treat it like a pure function aswell, no side effects
