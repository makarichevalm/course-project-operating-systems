import './Button.css';

function Button({ text, onClick, width, height }) {
    return (
        <button
            className="but_main"
            onClick={onClick}
            style={{ height, width }}
        >
            {text}
        </button>
    );
}
export default Button;
