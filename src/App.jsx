import { useEffect, useState } from "react"
import Form from "./components/PersonForm/Form";
import Filter from "./components/Filter";
import PersonsList from "./components/PersonsList";
import personsService from "./services/persons";

function App() {

  const [persons, setPersons] = useState([]);

  const [filter, setFilter] = useState("");

  useEffect(() => {

    personsService.getAll().then((data) => {
      setPersons(data);
    });

  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  const addPerson = (newPerson) => {
    personsService.create(newPerson).then((createdPerson) => {
      setPersons(persons.concat(createdPerson));
    })
  }

  const deletePerson = (id) => {
    const confirmation = window.confirm("Are you sure that you want to delete this person?");
    if (!confirmation) {
      return;
    }
    personsService.deleteOne(id).then((status) => {
      if (status === 200) {
        alert("Person deleted");
        setPersons(persons.filter((person) => person.id !== id));
      } else {
        alert("There was an error");
      }
    });
  }

  const updatePerson = (id, update) => {
    personsService.update(id, update).then((updatedPerson) => {
      setPersons(persons.map((person) => person.id === id ? updatedPerson : person));
    });
  }

  const filterPersons = () => persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()));

  const displayedPersons = filter ? filterPersons() : persons;

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Add a new person</h2>
      <Form persons={persons} addPerson={addPerson} updatePerson={updatePerson}></Form>
      <h2>Saved numbers</h2>
      <Filter onChange={handleFilterChange} value={filter}></Filter>
      <PersonsList persons={displayedPersons} deletePerson={deletePerson}></PersonsList>
    </div>
  )
}

export default App
