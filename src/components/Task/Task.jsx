import './Task.css';

import FormChange from '@components/FormChange/FormChange';
import { useState } from 'react';

import changeImg from '../../img/Change_img.svg';
import deleteImg from '../../img/Delete_img.svg';

function Task({ id, name, desc, clickDelete }) {
    const [checked, setChecked] = useState(false);
    const [isOpenChange, setIsOpenChange] = useState(false);
    const clickChange = () => {
        setIsOpenChange(false);
    };
    const changeTask = () => {
        setIsOpenChange(true);
    };
    const isCheckItem = checked ? { textDecoration: 'line-through' } : {};
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
                    <div className="desc" style={isCheckItem}>
                        {desc}
                    </div>
                </div>

                <button className="change_but" onClick={changeTask}>
                    <img src={changeImg} alt="change" />
                </button>
                <button className="delete_but" onClick={() => clickDelete(id)}>
                    <img src={deleteImg} alt="delete" />
                </button>
            </div>
            {isOpenChange && <FormChange handleClick={clickChange} />}
        </div>
    );
}
export default Task;
