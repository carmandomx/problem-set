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
  const controlStories = [
    //...stories make the same array of stories
    //and then add the new story object at the end.
    ...stories,
    {
      id: "create",
      label: "Create Story",
    },
  ];

  return (
    <ul
      style={{
        width: "100%",
        height: "100%",
        textAlign: "center",
      }}
    >
      {controlStories.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  );
};

export default ProblemThree;
