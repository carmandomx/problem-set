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
  //  For some reason the story was being pushed several times into the stories array, so reasigned the stories props to itself with the spread (...) operator
  // and added the defaultStory object
  const defaultStory = {
    id: "create",
    label: "Create Story",
  };
  // console.log(stories);
  stories = [defaultStory, ...stories];

  return (
    <ul
      style={{
        width: "100%",
        height: "100%",
        textAlign: "center",
      }}
    >
      {stories.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  );
};

export default ProblemThree;
