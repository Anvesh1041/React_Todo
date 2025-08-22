import React, { useEffect, useRef, useState } from 'react'
import { useTodo } from '../context/ToDoContext'

function TodoElement({todo}) {
    const { editTodo, deleteTodo, toggleActive} = useTodo()
    const [todoText, setTodoText] = useState(todo.text)
    const [isEditable,setIsEditable] = useState(false)
    const inputRef= useRef(null)

    const updateTodo=()=>{
        editTodo(todo.id, {...todo, text : todoText})
        setIsEditable(false)
    }
    console.log(isEditable)
    const handleDelete = ()=>{
        deleteTodo(todo.id)
    }

    const handleCheck = () => {
        // e.preventDefault()
        toggleActive(todo.id)
    }

    useEffect(() => {
    if (isEditable && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      ) // cursor at end
    }
  }, [isEditable])


    return (
        <div className={`w-full flex justify-around text-xl px-3 rounded-md shadow-md gap-2 ${todo.isActive ? "bg-lime-200" : "bg-gray-400"}`}>
            <input type="checkbox" className='cursor-pointer' checked={!todo.isActive} onChange={handleCheck} />
            <input ref={inputRef} type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} readOnly={!isEditable} className={`border w-full bg-transparent rounded-lg ${todo.isActive ? "" : "line-through"} ${isEditable ? "border-black/10 px-2" : "border-transparent"}`} />
            <button className='text-sm rounded-lg border p-2 border-black bg-gray-50 disabled:opacity-50 hover:bg-gray-300'
                onClick={() => {
                    if (!todo.isActive) return
                    if (isEditable)
                        updateTodo()
                    else
                        setIsEditable(true)
                }}
                disabled={!todo.isActive}
            >{isEditable ? "📁" : "✏️"}</button>
            <button className='bg-gray-50 hover:bg-gray-300 p-2 text-sm border border-black rounded-lg' onClick={handleDelete}>❌</button>

        </div>
    )
}

export default TodoElement