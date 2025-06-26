import { useState } from "react";
import FormRow from "./FormRow"

const Form = ({ persons, addPerson, updatePerson }) => {
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    }

    const findDuplicate = (name) => {
        return persons.find((person) => person.name === name);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPerson = {
            name: newName,
            number: newNumber
        };
        const duplicate = findDuplicate(newName);
        if (duplicate) {
            alert(`Updating ${newName}'s number...`);
            updatePerson(duplicate.id, newPerson);
            return;
        }
        addPerson(newPerson);
        setNewName("");
        setNewNumber("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormRow value={newName} onChange={handleNameChange} type="text" name="name" text="Name:"></FormRow>
            <FormRow value={newNumber} onChange={handleNumberChange} type="tel" name="number" text="Number:"></FormRow>
            <button type="submit">Add</button>
        </form>
    )
}

export default Form;