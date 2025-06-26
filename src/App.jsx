import { useState } from "react"

function App() {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (checkDuplicate(newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length
    };
    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
  }

  const checkDuplicate = (name) => {
    return persons.some((person) => person.name.toLowerCase() === name.toLowerCase());
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label htmlFor="name">Name:</label>
          <input onChange={handleNameChange} type="text" id="name" name="name" value={newName} />
        </div>
        <div className="row">
          <label htmlFor="number">Number:</label>
          <input onChange={handleNumberChange} type="tel" id="number" name="number" value={newNumber} />
        </div>
        <button type="submit">Add</button>
      </form>
      <h2>Numbers</h2>
      <p>filter by name:
        <input type="text" placeholder="Arto Hellas" value={filter} onChange={handleFilterChange}></input>
      </p>
      <ul>
        {persons.map((person) => <li key={person.id}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App
