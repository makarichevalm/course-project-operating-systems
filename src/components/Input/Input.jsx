import './Input.css';

function Input({ id, text, value, onChange }) {
    return (
        <input
            type="text"
            className="inputForm"
            id={id}
            placeholder={text}
            value={value}
            onChange={onChange}
        />
    );
}
export default Input;
