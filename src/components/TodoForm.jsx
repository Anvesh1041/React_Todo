import React, { useState } from 'react'
import { useTodo } from '../context/ToDoContext'



function TodoForm() {
    const [text, setText] = useState("")
    const [addTodo] = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!text) return
        addTodo({ id: Date.now(), text, isActive: false })
        setText("")
    }
    
    return (
        <form action={add} className="flex, justify-center, items-center, rounded-xl, shadow-md">
            <input type="text"
                className='bg-gray-500 text-lg'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='New Task'
            />
            <button type='submit' className='bg-amber-600 text-white p-3'>Add</button>

        </form>
    )
}

export default TodoForm