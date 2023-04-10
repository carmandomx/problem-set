import React from "react";
import "./styles/p3.css";
interface Story {
  id: number | string;
  label: string;
}

type Props = {
  stories: Story[];
};

const ProblemThree = ({ stories }: Props) => {
  let newStories = [...stories,{
    id: "create",
    label: "Create Story",
  }];

  return (
    <ul
      style={{
        width: "100%",
        height: "100%",
        textAlign: "center",
      }}
    >
      {newStories.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  );
};

export default ProblemThree;