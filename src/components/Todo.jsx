import React, { useState } from 'react'
import clsx from "clsx"
import {GrFormClose, GrEdit, GrCheckmark} from "react-icons/gr"
import { useTodoValue } from '../context/TodoContext'

const Todo = ({todo}) => {
    const [{}, dispatch] = useTodoValue()
    const [editable, setEditable] = useState(false)
    const [content, setContent] = useState(todo.content)

    const removeTodo = todoId => {
        dispatch({
            type: "REMOVE_TODO",
            payload: todoId
        })
    }

    const completeTodo = todoId => {
        dispatch({
            type: "COMPLETE_TODO",
            payload: todoId
        })
    }

    const updateTodo = ({todoId, newValue}) => {
        dispatch({
            type: "UPDATE_TODO",
            payload: {
                todoId,
                newValue
            }
        })
    }

    const todoStyle = clsx({
        ["todo-row"]: true,
        ["completed"]: todo.isCompleted
    })
    return (
        <div className={todoStyle}>
            <div onClick={() => editable ? "" : completeTodo(todo.id)} >
                {
                    editable ? <input className="todo-input-edit" value={content} onChange={e => setContent(e.target.value)} /> : todo.content
                }
            </div>
            <div className="todo-icons">
            <GrFormClose className="todo-icon" onClick={() => removeTodo(todo.id)} />
            {
                editable ? (<GrCheckmark className="todo-icon" 
                onClick={() => {
                    updateTodo({
                        todoId:todo.id,
                        newValue: content
                    })

                    setContent("");
                    setEditable(false)
                }}/>) : 
                
                (<GrEdit className="todo-icon" onClick={() => setEditable(true)}  />)
            }
            

            </div>
        </div>
    )
}

export default Todo
