import React, { useState } from 'react'
import { useTodo } from '../context/ToDoContext'

function TodoElement() {
    const [todo, editTodo, deleteTodo, toggleActive] = useTodo()
    const [todoText, setTodoText] = useState(todo.text)
    const [isEditable,setIsEditable] = useState(false)

    const updateTodo=()=>{
        editTodo(todo.id, {...todo, text : todoText})
        setIsEditable(true)
    }

    const handleDelete = ()=>{
        deleteTodo(todo.id)
    }

    const handleCheck = (e) => {
        e.preventDefault()
        toggleActive(todo.id)
    }

    return (
        <div className={`w-3/4 flex justify-around text-xl px-3 rounded-md shadow-md ${todo.isActive ? "bg-lime-200" : "bg-gray-400"}`}>
            <input type="checkbox" className='cursor-pointer' checked={!todo.isActive} onChange={handleCheck} />
            <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} readOnly={!isEditable} className={`border w-full bg-transparent rounded-lg ${todo.isActive ? "" : "line-through"} ${isEditable ? "border-black/10 px-2" : "border-transparent"}`} />
            <button className='text-sm rounded-lg border border-black bg-gray-50 disabled:opacity-50 hover:bg-gray-300'
                onClick={() => {
                    if (!todo.isActive) return
                    if (isEditable)
                        updateTodo()
                    else
                        setIsEditable((prev) => (!prev))
                }}
                disabled={todo.isActive}
            >{isEditable ? "📁" : "✏️"}</button>
            <button className='bg-gray-50 hover:bg-gray-300 p-2 text-sm border border-black rounded-lg' onClick={handleDelete}>❌</button>

        </div>
    )
}

export default TodoElement