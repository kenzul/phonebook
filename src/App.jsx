import { useState } from "react"
import Form from "./components/PersonForm/Form";
import Filter from "./components/Filter";
import PersonsList from "./components/PersonsList";

function App() {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 0 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 1 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 2 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 3 }
  ]);

  const [filter, setFilter] = useState("");

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
      <Form persons={persons} addPerson={addPerson}></Form>
      <h2>Numbers</h2>
      <Filter onChange={handleFilterChange} value={filter}></Filter>
      <PersonsList persons={displayedPersons}></PersonsList>
    </div>
  )
}

export default App
