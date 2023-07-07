import './FormAdd.css';

import Button from '@components/Button/Button';
import Input from '@components/Input/Input';

function handleClick() {
    console.log('You clicked me!');
}
function FormAdd() {
    return (
        <div className="all">
            <div className="form">
                <div className="nameForm">New task</div>
                <Input name="Name" text="Name" />
                <Input name="Desc" text="Description" />
                <Button
                    text="Add new task"
                    onClick={handleClick}
                    width="367px"
                    height="74px"
                />
            </div>
        </div>
    );
}
export default FormAdd;
