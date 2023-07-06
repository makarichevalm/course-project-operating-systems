import './Task.css';

import changeImg from '../../img/Change_img.svg';
import deleteImg from '../../img/Delete_img.svg';

function Task({ name, desc }) {
    return (
        <div className="task">
            <div>
                <input type="checkbox" className="checkbox" />
            </div>
            <div className="text_block">
                <div className="name">{name}</div>
                <div className="desc">{desc}</div>
            </div>
            <div className="change_but">
                <img src={changeImg} alt="" />
            </div>
            <div className="delete_but">
                <img src={deleteImg} alt="" />
            </div>
        </div>
    );
}
export default Task;
