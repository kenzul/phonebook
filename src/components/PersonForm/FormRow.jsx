import Input from "./Input"

const FormRow = ({ name, text, onChange, value, type }) => {
    return (
        <div className="row">
            <label htmlFor={name}>{text}</label>
            <Input onChange={onChange} value={value} name={name} type={type}></Input>
        </div>
    )
}

export default FormRow;