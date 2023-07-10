import './MainPage.css';

import Button from '@components/Button/Button';
import FormAdd from '@components/FormAdd/FormAdd';
import Task from '@components/Task/Task';
import { useState } from 'react';

let ind = 3;
const dataTasks = [
    { id: 0, name: 'mnbv', description: ',mnbvc' },
    { id: 1, name: '1kjhgfd', description: '1nbvcx' },
    { id: 2, name: 'jmhngbfvdc', description: 'poiuytre' },
];
function MainPage() {
    const [tasks, setTasks] = useState(dataTasks);
    const [isOpenAdd, setIsOpenAdd] = useState(false);
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const clickAdd = () => {
        setTasks([...tasks, { id: (ind += 1), name, description: desc }]);
        setIsOpenAdd(false);
    };
    const changeName = (event) => {
        setName(event.target.value);
    };
    const changeDesc = (event) => {
        setDesc(event.target.value);
    };
    const handleClick = () => {
        setIsOpenAdd(true);
    };
    return (
        <div className="all">
            <div className="main">
                <div className="but">
                    <Button
                        text="Add new task"
                        onClick={handleClick}
                        width="387px"
                        height="74px"
                    />
                </div>
                {tasks.map((item) => (
                    <Task name={item.name} desc={item.description} />
                ))}
            </div>
            {isOpenAdd && (
                <FormAdd
                    handleClick={clickAdd}
                    name={name}
                    desc={desc}
                    changeName={changeName}
                    changeDesc={changeDesc}
                />
            )}
        </div>
    );
}

export default MainPage;
