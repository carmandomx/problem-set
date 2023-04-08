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

  const spreadStories = [...stories]

  spreadStories.push({
    id: "create",
    label: "Create Story",
  });

  return (
    <ul
      style={{
        width: "100%",
        height: "100%",
        textAlign: "center",
      }}
    >
      {spreadStories.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  );
};

export default ProblemThree;
