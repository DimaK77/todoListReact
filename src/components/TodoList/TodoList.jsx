import React, { useState } from "react";
import  cl from './todoList.module.css'
import { TodoItem } from "../TodoItem";

const TodoList = () => {
    const [todoItems, setTodoItems] = useState([])
    const [addItem, setAddItem] = useState({title : '', id : '', isChecked : false})//заменить на локальное состояние

    const addNewItem = (e) => {
        e.preventDefault()
        if(addItem.title !== '') {
        setTodoItems([...todoItems, addItem])
        setAddItem({title : '', id : ''})
        }
    }

    const checked = (e) => {
        e.target.checked ? e.target.parentElement.classList.add(cl.checkbox) : e.target.parentElement.classList.remove(cl.checkbox)
    }

    const delItem = (e) => {
        setTodoItems(todoItems.filter(item => (String(item.id) !== String(e.target.id))))
    }

    return (
        <div className = {cl.main}>
            TodoList
            <form 
                className = {cl.header}
                onSubmit={addNewItem}
            >
                <input
                    value={addItem.title}
                    type="text" 
                    placeholder='Заметка' 
                    onChange = {e => setAddItem({...addItem, title: e.target.value})}
                />
                <button 
                    type="submit"
                    onClick = {() => setAddItem({...addItem, id: Date.now()})}
                >
                    ►
                </button>
            </form>
            <ul className = {cl.todo}>
                {todoItems.map(({ id, title, isChecked }) => (
                  <TodoItem id={id} title={title} isChecked={isChecked} setTodoItems={setTodoItems} />
                ))}
            </ul>
        </div>
    )
}

export default TodoList