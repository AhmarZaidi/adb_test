import './App.css';
import React, { useRef, useState, useEffect } from 'react'
import { getTodos } from './Components/Helper_Functions'
import ShowTodoList from './Components/ShowTodoList'
import AddTodo from './Components/AddTodo'

export default function App () {
  const [todoList, setTodoList] = useState([]);
  const todoRef = useRef(null);

  useEffect(() => {
    // Initially populating the 'todoList' with data from the Database
    getTodos(setTodoList)
  }, [])

  return (
    <div className="App">
    <div className="list">
      <ShowTodoList todoList={todoList}/>
    </div>
    <div>
      <h1>Create a ToDo</h1>
      <AddTodo setTodoList={setTodoList} todoRef={todoRef}/>
    </div>
    </div>
  );
}