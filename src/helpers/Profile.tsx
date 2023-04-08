import Panel from "./Panel";
import { getImageUrl, Person } from "./imgFetcher";
import "../styles/p2.css";
type Props = {
  person: Person;
};

// Start scope of the problem

export default function Profile({ person }: Props) {
  // The components were impure, so made the currentPerson variable declaration to be inside the component...
  // And made the other components be inside the main component "Profile"
  let currentPerson: Person = person;
  return (
    <Panel>
      <Header />
      <Avatar />
    </Panel>
  );

  // End scope of the problem
  function Header() {
    return <h1>{currentPerson.name}</h1>;
  }

  function Avatar() {
    return (
      <img
        className="avatar"
        src={getImageUrl(currentPerson)}
        alt={currentPerson.name}
        width={50}
        height={50}
      />
    );
  }
}
