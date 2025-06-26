
const Filter = ({ value, onChange }) => {
    return (
        <p>filter by name:
            <input type="text" placeholder="Arto Hellas" value={value} onChange={onChange}></input>
        </p>
    )
}

export default Filter;