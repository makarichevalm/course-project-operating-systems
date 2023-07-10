import './Task.css';

import FormChange from '@components/FormChange/FormChange';
import React, { useState } from 'react';

import changeImg from '../../img/Change_img.svg';
import deleteImg from '../../img/Delete_img.svg';

function Task({ name, desc }) {
    const [checked, setChecked] = useState(false);
    const [isOpenCh, setIsOpenCh] = useState(false);
    const clickChange = () => {
        setIsOpenCh(false);
        console.log('You clicked change close!');
    };
    const changeTask = () => {
        setIsOpenCh(true);
        console.log('You clicked change!');
    };
    function deleteTask() {}
    return (
        <div>
            <div className="task">
                <div>
                    <input
                        type="checkbox"
                        className="checkbox"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                    />
                </div>
                <div className="text_block">
                    <div className="name">{name}</div>
                    <div
                        className="desc"
                        style={
                            checked ? { textDecoration: 'line-through' } : {}
                        }
                    >
                        {desc}
                    </div>
                </div>

                <button className="change_but" onClick={changeTask}>
                    <img src={changeImg} alt="" />
                </button>
                <button className="delete_but" onClick={deleteTask()}>
                    <img src={deleteImg} alt="" />
                </button>
            </div>
            {isOpenCh && <FormChange handleClick={clickChange} />}
        </div>
    );
}
export default Task;
