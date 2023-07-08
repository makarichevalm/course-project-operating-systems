import './FormAdd.css';

import Button from '@components/Button/Button';
import Input from '@components/Input/Input';
import { current } from '@reduxjs/toolkit';
import React, { useState } from 'react';

function FormAdd({ state }) {
    const [isOpen, setIsOpen] = useState({ state });
    const handleClick = () => {
        setIsOpen(!current);
        console.log('You clicked at form button!');
    };
    return (
        isOpen && (
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
        )
    );
}
export default FormAdd;
