import { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/input";
import classes from './todolist.module.css';
import Modal from "../../components/Modal/Modal";
const TodoList = () => {
    const [ isShow, setIsShow ] = useState(false);
    const [ newTask, setNewTask ] = useState('Пусто');
    const handleShow = () => {
        setIsShow(!isShow);
    };
    const handleChangeText = (text) => {
        setNewTask(text);
        console.log(newTask, 'new text')
    }

    return (
        <div className={classes.wrapper}>
            <Button handleShow={handleShow}>
                Добавить
            </Button>
            <Input/>


            { isShow && <Modal handleShow={handleShow}>
                <p>{newTask}</p>
                <input type="text" onChange={(event) =>  handleChangeText(event.target.value) }  />
            <Button>
                Добавить
            </Button>

            <button onClick={handleShow}>Close</button>
            </Modal> }
        </div>
    )
}


export default TodoList;
