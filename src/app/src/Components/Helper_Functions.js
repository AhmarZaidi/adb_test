import axios from "axios"

const API_URL = "http://localhost:8000/todos/"

export const getTodos = async (setTodoList) => {
  axios.get(API_URL)
    .then(response => {setTodoList(response.data)})
    .catch(err => console.log(err))
} 

export const addTodo = async (newTodo, setTodoList) => {
  let statusCode = 0
  await axios.post(API_URL,{title: newTodo})
  .then (res => {statusCode = res.status})
  .catch(err => console.log(err))
  
  if(statusCode === 200)
    setTodoList((oldArray) => [...oldArray, {title : newTodo}]);  
}