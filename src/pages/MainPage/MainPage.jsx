import './MainPage.css';

import Button from '@components/Button/Button';
import FormAdd from '@components/FormAdd/FormAdd';
import Task from '@components/Task/Task';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const dataTasks = [
    {
        id: uuid(),
        name: 'go to shop',
        description: 'milk, eggs, water, apples',
    },
    { id: uuid(), name: 'gym', description: '17:00' },
    { id: uuid(), name: 'reading', description: 'find a book' },
];
function MainPage() {
    const [tasks, setTasks] = useState(dataTasks);
    const [isOpenAdd, setIsOpenAdd] = useState(false);
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const clickAdd = () => {
        setTasks([...tasks, { id: uuid(), name, description: desc }]);
        setName('');
        setDesc('');
        setIsOpenAdd(false);
    };
    const changeName = (event) => {
        setName(event.target.value);
    };
    const changeDesc = (event) => {
        setDesc(event.target.value);
    };
    const changeTaskArr = (idTask, nameTask, descTask) => {
        const changedTasks = tasks.map((item) => {
            if (item.id === idTask)
                return { id: idTask, name: nameTask, description: descTask };
            return item;
        });
        setTasks(changedTasks);
    };
    const handleClick = () => {
        setIsOpenAdd(true);
    };
    const clickDeleteTask = (id) => {
        setTasks(tasks.filter((item) => item.id !== id));
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
                    <Task
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        desc={item.description}
                        clickDelete={clickDeleteTask}
                        changeTask={changeTaskArr}
                    />
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
