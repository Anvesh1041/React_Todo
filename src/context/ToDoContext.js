import { createContext, useContext } from "react";

export const todoContext = createContext({
    todo: {
        id: 1,
        text: "",
        isActive : true
    },
    addTodo: (todo)=>{},
    editTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleActive: (id)=>{}

})

export const useTodo= ()=>{
    return useContext(todoContext)
}

export const todoProvider = todoContext.Provider