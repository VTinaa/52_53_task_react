
const Input = ({ value, type, placeholder, label, onChangeFunction, error }) => {

    return (
        <label>
            { label }
            <input 
            type={type || 'text'} 
            placeholder={placeholder} 
            onChange={(event) => onChangeFunction(event.target.value)} 
            value={value}
            />
            {/* {error && <p>{error}</p>} */}
        </label>
    )
}

export default Input;