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
  const newStories = [...stories, {id: "create",label: "Create Story",}];

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

/*The bug in this component was caused because the original stories array was being modified by pushing a new story into it.
And since arrays are reference types in JavaScript, this modifies the original array passed as a prop. And React updates the page with the new array so that cause
the bug where a new story is push each x time.

To fix this, i created a new array "newStories" by spreading the original stories array and adding the “Create Story” placeholder at the end. This ensures that the original array is not modified and that the "Create Story" placeholder appears only once.*/
