import './Button.css';

function Button({ text, onClick }) {
    return (
        <button className="but_main" onClick={onClick}>
            {text}
        </button>
    );
}
export default Button;
