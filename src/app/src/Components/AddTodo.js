import React from 'react'
import { addTodo } from './Helper_Functions'

export default function AddTodo(props) {

const addTodoHandeler = (event) => {
    event.preventDefault();
    const newTodo = document.getElementById('input_todo').value;
    // If 'newTodo' is not null, undifined or not empty, add it to the Database and the state 'todoList'
    if(newTodo)
    {
        addTodo(newTodo, props.setTodoList);
        props.todoRef.current.value = '';
    }
};

return (
<form>
    <div>
        <label for="todo">ToDo: </label>
        <input id='input_todo' ref={props.todoRef}/>
    </div>
    <div style={{"marginTop": "5px"}}>
        <button onClick={addTodoHandeler}  type="submit" >Add ToDo!</button>
    </div>
</form>
)
}
