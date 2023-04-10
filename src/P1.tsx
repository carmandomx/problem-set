import React from "react";
import "./styles/p1.css";
type Props = {
  time: Date;
};

const ProblemOne = ({ time }: Props) => {
  let timeOfDay : string;
  let hours = time.getHours();
  if (hours >= 0 && hours <= 6) {
    timeOfDay = "night" 
  } else {
    timeOfDay = "day";
  }
  return <h1 id="time" className= {timeOfDay}>{time.toLocaleTimeString()}</h1>;
};

export default ProblemOne;

// Hint Below...

// Rendering is a calculation treat it like a pure function aswell, no side effects

/*The problem was that the program was trying to access to an element with ID of "time" and set the class to day or night,
 but the element h1 that is the one with the id of time hasn't been rendered yet. To solve it i store the string "day" or "night" in a variable and then assign the className of the h1 to that.
 */ 