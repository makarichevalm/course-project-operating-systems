import './FormChange.css';

import Button from '@components/Button/Button';
import Input from '@components/Input/Input';

function FormChange({ handleClick, name, desc, changeName, changeDesc }) {
    console.log(name);
    return (
        <div className="all">
            <div className="form">
                <div className="nameForm">{`Task - ${name}`}</div>
                <Input name="Name" text="" value={name} onChange={changeName} />
                <Input name="Desc" text="" value={desc} onChange={changeDesc} />
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
