import { useState } from "react";
import FormRow from "./FormRow"

const Form = ({ persons, addPerson }) => {
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    }

    const checkDuplicate = (name) => {
        return persons.some((person) => person.name.toLowerCase() === name.toLowerCase());
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (checkDuplicate(newName)) {
            alert(`${newName} is already added to phonebook`);
            return;
        }
        const newPerson = {
            name: newName,
            number: newNumber
        };
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