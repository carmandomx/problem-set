import Panel from "./Panel";
import { getImageUrl, Person } from "./imgFetcher";
import "../styles/p2.css";
type Props = {
  person: Person;
};


// Start scope of the problem
export default function Profile({ person }: Props) {
  // Move function so the scope is not the problem
  function Header({ person }: Props) {
    return <h1>{person.name}</h1>;
  }
  
  function Avatar({ person }: Props) {
    return (
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={50}
        height={50}
      />
    );
  }
  
  return (
    <Panel>
      <Header person={person}/>
      <Avatar person={person}/>
    </Panel>
  );
}

// End scope of the problem
