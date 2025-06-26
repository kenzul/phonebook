import { useState } from "react"

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "39-44-52323", id: 0 }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
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
      <ul>
        {persons.map((person) => <li key={person.id}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App
