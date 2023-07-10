import './FormChange.css';

import Button from '@components/Button/Button';
import Input from '@components/Input/Input';

function FormChange({ handleClick }) {
    return (
        <div className="all">
            <div className="form">
                <div className="nameForm">Task</div>
                <Input name="Name" text="Name" />
                <Input name="Desc" text="Description" />
                <Button
                    text="Change task"
                    onClick={handleClick}
                    width="367px"
                    height="74px"
                />
            </div>
        </div>
    );
}
export default FormChange;
