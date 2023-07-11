import './Task.css';

import FormChange from '@components/FormChange/FormChange';
import { useState } from 'react';

import changeImg from '../../img/Change_img.svg';
import deleteImg from '../../img/Delete_img.svg';

function Task({ id, name, desc, clickDelete, changeTask }) {
    const [checked, setChecked] = useState(false);
    const [isOpenChange, setIsOpenChange] = useState(false);
    const [newName, setNewName] = useState(name);
    const [newDesc, setNewDesc] = useState(desc);
    const changeName = (event) => {
        setNewName(event.target.value);
    };
    const changeDesc = (event) => {
        setNewDesc(event.target.value);
    };
    const clickChange = (iVal) => {
        setIsOpenChange(false);
        changeTask(iVal, newName, newDesc);
    };
    const clickChangeForm = () => {
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

                <button className="change_but" onClick={clickChangeForm}>
                    <img src={changeImg} alt="change" />
                </button>
                <button className="delete_but" onClick={() => clickDelete(id)}>
                    <img src={deleteImg} alt="delete" />
                </button>
            </div>
            {isOpenChange && (
                <FormChange
                    id={id}
                    handleClick={clickChange}
                    name={newName}
                    desc={newDesc}
                    changeName={changeName}
                    changeDesc={changeDesc}
                />
            )}
        </div>
    );
}
export default Task;
