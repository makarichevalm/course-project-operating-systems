import './MainPage.css';

import Button from '@components/Button/Button';
import Task from '@components/Task/Task';

function handleClick() {
    console.log('You clicked me!');
}
function MainPage() {
    return (
        <div className="all">
            <div className="main">
                <Button text="Add new task" onClick={handleClick} />
                <Task name="Name" desc="Description" />
                <Task name="Name" desc="Description" />
                <Task name="Name" desc="Description" />
            </div>
        </div>
    );
}

export default MainPage;
