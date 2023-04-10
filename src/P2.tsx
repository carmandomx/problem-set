import React from "react";
import Profile from "./helpers/Profile";

const ProblemTwo = () => {
  return (
    <>
      <Profile
        key="Sumitar Chandlr"
        person={{
          imageId: "lrWQx8l",
          name: "Sumitar Chandlr",
        }}
      />
      <Profile
        key="Cypher Johnson"
        person={{
          imageId: "MK3eW3A",
          name: "Cypher Johnson",
        }}
      />
    </>
  );
};

export default ProblemTwo;
