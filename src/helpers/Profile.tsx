import Panel from "./Panel";
import { getImageUrl, Person } from "./imgFetcher";
import "../styles/p2.css";
type Props = {
  person: Person;
};

// Start scope of the problem
let currentPerson: Person;
export default function Profile({ person }: Props) {
  currentPerson = person;
  return (
    <Panel>
      <h1>{currentPerson.name}</h1>
      <img
        className="avatar"
        src={getImageUrl(currentPerson)}
        alt={currentPerson.name}
        width={50}
        height={50}
      />
    </Panel>
  );
}

// End scope of the problem
