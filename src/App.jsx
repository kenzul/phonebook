import { useState } from "react"

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", id: 0 }
  ]);
  const [newName, setNewName] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      id: persons.length
    };
    setPersons({ ...persons, newPerson });
    setNewName("");
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label htmlFor="name">Name:</label>
          <input onChange={handleNameChange} type="text" id="name" name="name" value={newName} />
        </div>
        <button type="submit">Add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => <li key={person.id}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App
