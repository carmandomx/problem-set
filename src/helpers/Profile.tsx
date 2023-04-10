import Panel from "./Panel";
import { getImageUrl, Person } from "./imgFetcher";
import "../styles/p2.css";
type Props = {
  person: Person;
};

// Start scope of the problem
export default function Profile({ person }: Props) {
  let currentPerson: Person;
  currentPerson = person;
  return (
    <Panel>
      <Header />
      <Avatar />
    </Panel>
  );
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

// End scope of the problem
/*The problem was that the currentPerson variable was global so when you collapse and expand the first profile, it updates the currentPerson variable. 
To fix the problem i just move the currentPerson variable inside the function as well as the functions Header and Avatar so they can use that variable as well. */ 
