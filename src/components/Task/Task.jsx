import './Task.css';

import changeImg from '../../img/Change_img.svg';
import deleteImg from '../../img/Delete_img.svg';

function Task({ name, desc }) {
    function changeTask() {}
    function deleteTask() {}
    return (
        <div className="task">
            <div>
                <input type="checkbox" className="checkbox" />
            </div>
            <div className="text_block">
                <div className="name">{name}</div>
                <div className="desc">{desc}</div>
            </div>
            <button className="change_but" onClick={changeTask()}>
                <img src={changeImg} alt="" />
            </button>
            <button className="delete_but" onClick={deleteTask()}>
                <img src={deleteImg} alt="" />
            </button>
        </div>
    );
}
export default Task;
