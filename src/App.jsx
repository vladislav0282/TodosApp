import './App.css'
import { Header } from './components/Heder/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  const addNewTodo = (title) => {
    
    const newTodo = {
      id: crypto.randomUUID(),
      completed: false,
      title: title
    }
    setTodos((prev) => [newTodo, ...prev])
  }
  
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const changeStatusTodo = (id) => {
    setTodos((prev) => prev.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }))
  }

  const clearAllTodos = () => {
    setTodos([])
  } 

  console.log({todos});
  
  return (
    <div className="container py-5">
      <Header addNewTodo={addNewTodo}/>
      <hr />
      <Main todos = {todos} 
      deleteTodo={deleteTodo} 
      changeStatusTodo={changeStatusTodo}
      />
      <hr />
      <Footer clearAllTodos={clearAllTodos} todos = {todos}/>
    </div>
  );
}

export default App;
