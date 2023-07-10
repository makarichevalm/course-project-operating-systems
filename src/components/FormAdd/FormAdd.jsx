import './FormAdd.css';

import Button from '@components/Button/Button';
import Input from '@components/Input/Input';
// import { useState } from 'react';

function FormAdd({ handleClick, name, desc }) {
    return (
        <div className="all">
            <div className="form">
                <div className="nameForm">New task</div>
                <Input name="Name" text="Name" value={name} />
                <Input name="Desc" text="Description" value={desc} />
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
