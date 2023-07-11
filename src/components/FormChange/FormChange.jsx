import './FormChange.css';

import Button from '@components/Button/Button';
import Input from '@components/Input/Input';

function FormChange({ id, handleClick, name, desc, changeName, changeDesc }) {
    return (
        <div className="all">
            <div className="form">
                <div className="nameForm">{`Task - ${name}`}</div>
                <Input id="Name" text="" value={name} onChange={changeName} />
                <Input id="Desc" text="" value={desc} onChange={changeDesc} />
                <Button
                    text="Change task"
                    onClick={() => handleClick(id)}
                    width="367px"
                    height="74px"
                />
            </div>
        </div>
    );
}
export default FormChange;
