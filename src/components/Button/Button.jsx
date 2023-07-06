import './Button.css';

function Button({ text }) {
    function handleClick() {
        console.log('You clicked me!');
    }
    return (
        <button className="but_main" onClick={handleClick}>
            {text}
        </button>
    );
}
export default Button;
