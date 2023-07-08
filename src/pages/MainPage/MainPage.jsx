import './MainPage.css';

import Button from '@components/Button/Button';
import FormAdd from '@components/FormAdd/FormAdd';
import Task from '@components/Task/Task';
import React, { useState } from 'react';

function MainPage() {
    const [isShown, setIsShown] = useState(false);
    // const [isDisabled, setIsDisabled] = useState(false);
    const handleClick = () => {
        setIsShown(true);
        // setIsDisabled(true);
        console.log('You clicked me!');
    };
    return (
        <div className="all">
            <div
                className="main"
                // style={
                // isDisabled ? { pointerEvents: 'none', opacity: '0.8' } : {}
                //  }
            >
                <div className="but">
                    <Button
                        text="Add new task"
                        onClick={handleClick}
                        width="387px"
                        height="74px"
                    />
                </div>
                <Task name="Name" desc="Description" />
                <Task name="Name" desc="Description" />
                <Task name="Name" desc="Description" />
            </div>
            {isShown && <FormAdd state={isShown} />}
        </div>
    );
}

export default MainPage;
