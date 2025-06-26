
const PersonItem = ({ person, deletePerson }) => {
    return (
        <li style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <p style={{ display: "inline" }}>{person.name} {person.number}</p>
            <button type="button" onClick={() => {
                deletePerson(person.id);
            }}>delete</button>
        </li>
    )
}

export default PersonItem;