import './FormChange.css';

import Button from '@components/Button/Button';
import Input from '@components/Input/Input';
import { Link } from 'react-router-dom';

function FormChange() {
    const handleClick = () => {
        console.log('You clicked at form change!');
    };
    return (
        <div className="all">
            <div className="form">
                <div className="nameForm">Task</div>
                <Input name="Name" text="Name" />
                <Input name="Desc" text="Description" />
                <Link to="/">
                    <Button
                        text="Change task"
                        onClick={handleClick}
                        width="367px"
                        height="74px"
                    />
                </Link>
            </div>
        </div>
    );
}
export default FormChange;
