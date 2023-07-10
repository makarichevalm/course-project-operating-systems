import './Task.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import changeImg from '../../img/Change_img.svg';
import deleteImg from '../../img/Delete_img.svg';

function Task({ name, desc }) {
    const [checked, setChecked] = useState(false);
    function changeTask() {}
    function deleteTask() {}
    return (
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
                    style={checked ? { textDecoration: 'line-through' } : {}}
                >
                    {desc}
                </div>
            </div>
            <Link to="/change">
                <button className="change_but" onClick={changeTask()}>
                    <img src={changeImg} alt="" />
                </button>
            </Link>
            <button className="delete_but" onClick={deleteTask()}>
                <img src={deleteImg} alt="" />
            </button>
        </div>
    );
}
export default Task;
