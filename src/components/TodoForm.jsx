import React, { useState } from 'react'
import { useTodo } from '../context/ToDoContext'



function TodoForm() {
    const [text, setText] = useState("")
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!text) return
        addTodo({ id: Date.now(), text: text, isActive: true })
        setText("")
    }

    return (
        <form onSubmit={add} className="flex rounded-xl shadow-md overflow-hidden w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
            <input type="text"
                className='bg-gray-300 text-lg px-4 py-2 outline-none flex-[3]'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='New Task'
            />
            <button type='submit' className='bg-amber-600 flex-[1] text-white px-4 py-2 hover:bg-amber-500'>Add</button>

        </form>
    )
}

export default TodoForm