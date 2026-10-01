import { createContext, useContext } from "react";

// The value you want the context to have when there is no matching Provider in the tree above the component reading the context. This is meant as a "last resort" fallback.

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Todo Testing",
            completed:false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo:(id , todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{},

});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;

// Accepts a context object (the value returned from React.createContext) and returns the current context value, as given by the nearest context provider for the given context.
