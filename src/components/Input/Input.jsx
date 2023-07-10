import './Input.css';

function Input({ name, text, val, onChange }) {
    return (
        <input
            type="text"
            className="inputForm"
            id={name}
            placeholder={text}
            value={val}
            onChange={onChange}
        />
    );
}
export default Input;
