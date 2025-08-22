import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos: [{
        id: 1,
        text: "",
        isActive : false
    }],
    addTodo: (todo)=>{},
    editTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleActive: (id)=>{}

})

export const useTodo= ()=>{
    return useContext(todoContext)
}

export const TodoProvider = todoContext.Provider