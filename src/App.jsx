import { useState } from "react"

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", id: 1 }
  ]);
  const [newName, setNewName] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <form>
        <div className="row">
          <label htmlFor="name">Name:</label>
          <input onChange={handleNameChange} type="text" id="name" name="name" value={newName} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default App
