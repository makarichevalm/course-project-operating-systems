import './MainPage.css';

import Button from '@components/Button/Button';
import Task from '@components/Task/Task';
import { Link } from 'react-router-dom';

function MainPage() {
    const handleClick = () => {
        console.log('You clicked me!');
    };
    return (
        <div className="all">
            <div className="main">
                <div className="but">
                    <Link to="/create">
                        <Button
                            text="Add new task"
                            onClick={handleClick}
                            width="387px"
                            height="74px"
                        />
                    </Link>
                </div>
                <Task name="Name" desc="Description" />
                <Task name="Name" desc="Description" />
                <Task name="Name" desc="Description" />
            </div>
        </div>
    );
}

export default MainPage;
