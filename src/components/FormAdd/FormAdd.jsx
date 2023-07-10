import './FormAdd.css';

import Button from '@components/Button/Button';
import Input from '@components/Input/Input';

function FormAdd({ handleClick, name, desc, changeName, changeDesc }) {
    return (
        <div className="all">
            <div className="form">
                <div className="nameForm">New task</div>
                <Input
                    name="Name"
                    text="Name"
                    value={name}
                    onChange={changeName}
                />
                <Input
                    name="Desc"
                    text="Description"
                    value={desc}
                    onChange={changeDesc}
                />
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
