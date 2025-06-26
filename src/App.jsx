import { useEffect, useState } from "react"
import Form from "./components/PersonForm/Form";
import Filter from "./components/Filter";
import PersonsList from "./components/PersonsList";
import axios from "axios";

function App() {

  const [persons, setPersons] = useState([]);

  const [filter, setFilter] = useState("");

  useEffect(() => {
    const promise = axios.get("http://localhost:3001/persons");
    promise.then((response) => setPersons(response.data));
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  const addPerson = (newPerson) => {
    setPersons(persons.concat(newPerson));
  }

  const filterPersons = () => persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()));

  const displayedPersons = filter ? filterPersons() : persons;

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Add a new person</h2>
      <Form persons={persons} addPerson={addPerson}></Form>
      <h2>Saved numbers</h2>
      <Filter onChange={handleFilterChange} value={filter}></Filter>
      <PersonsList persons={displayedPersons}></PersonsList>
    </div>
  )
}

export default App
