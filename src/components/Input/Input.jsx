import './Input.css';

function Input({ name, text }) {
    return (
        <input type="text" className="inputForm" id={name} placeholder={text} />
    );
}
export default Input;
