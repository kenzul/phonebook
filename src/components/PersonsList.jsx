import PersonItem from "./PersonItem";

const PersonsList = ({ persons, deletePerson }) => {
    return (
        <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {persons.map((person) => <PersonItem key={person.id} person={person} deletePerson={deletePerson}></PersonItem>)}
        </ul>
    )
}

export default PersonsList;