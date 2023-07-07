import './Button.css';

function Button({ text, event }) {
    return (
        <button className="but_main" onClick={event}>
            {text}
        </button>
    );
}
export default Button;
