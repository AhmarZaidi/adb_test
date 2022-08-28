import React from 'react'

export default function ShowTodoList(props) {
  return (
    <div>
        <h1>ToDos</h1>
        <ul className='list-group list-group-horizontal' id='ul-element'>
          {props.todoList.map((item) => (<li key={item.title}>{item.title}</li>))}
        </ul>
    </div>
  )
}
