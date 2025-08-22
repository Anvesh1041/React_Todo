import { useState } from "react"
import { TodoProvider } from "./context/ToDoContext"
import TodoForm from "./components/TodoForm"
import TodoElement from "./components/TodoElement"

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [todo, ...prev])
  }

  const editTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleActive = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, isActive: !prevTodo.isActive } : prevTodo))
  }

  return (
    <TodoProvider value={{ todos, addTodo, editTodo, deleteTodo, toggleActive }}>
      <div className=" flex flex-col gap-2 h-screen items-center">
        <div className="mt-[20vh] w-full flex justify-center">
          <TodoForm />
        </div>
        <div className="flex justify-center flex-wrap gap-y-2 w-full">

          {todos.map((eachTodo) => (
            <div key={eachTodo.id} className=" w-3/4 flex justify-center">
              <TodoElement todo={eachTodo} />

            </div>
          ))}
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
