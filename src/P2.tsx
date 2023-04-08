import React from "react";
import Profile from "./helpers/Profile";




const ProblemTwo = () => {
  const person1 = 
  {
    imageId: "lrWQx8l",
    name: "Sumitar Chandlr",
  };

  const person2 = {
    imageId: "MK3eW3A",
    name: "Cypher Johnson",
  };

  return (
    <>
      
      <Profile
        person={person1}
      />
      
      
      <Profile
        person={person2}
      />

    </>
    
  );
};

export default ProblemTwo;
