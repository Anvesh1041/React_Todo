import { useState } from "react"
import { todoProvider, useTodo } from "./context/ToDoContext"

function App() {
  const [todo, setTodo] = useState([])

  const addTodo = (todo)=>{
    setTodo((prev)=>[todo, ...prev])
  }

  const editTodo = (id,todo)=>{
    setTodo((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? todo : prevTodo))
  }

  const deleteTodo = (id)=>{
    setTodo((prev)=> prev.filter ((prevTodo)=> prevTodo.id !== id))
  }

  const toggleActive = (id)=>{
    setTodo((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo, isActive: !prevTodo.isActive}: todo))
  }

  return (
    <todoProvider value = {{todo, addTodo, editTodo, deleteTodo, toggleActive}}>

    <h1 className="bg-red-500 text-center">Hello</h1>
    </todoProvider>
  )
}

export default App
