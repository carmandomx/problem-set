import Panel from "./Panel";
import { getImageUrl, Person } from "./imgFetcher";
import "../styles/p2.css";
type Props = {
  person: Person;
};

// Start scope of the problem
var currentPerson: Person
export default function Profile({ person }: Props) {
  currentPerson = person;
  return (
    <>
    <Panel>
      <Header />
      <Avatar />
    </Panel>
    </>
  );
}

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
