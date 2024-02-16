/* eslint-disable react/jsx-key */
import { useEffect, useReducer } from 'react'
import './App.css'
import { initialTodos, reducer } from './utils/reducer';
import Todo from './components/Todo';


function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  function formHandler(e){
    e.preventDefault();
    let task = e.target.elements.task.value;
    if(task !== ''){
    dispatch({type: 'ADD', title: task})
    }else {
      alert('Enter your task!!!')
    }
    e.target.elements.task.value = ''
  }

  function deleteTodo(id){
    dispatch({type: 'DELETE', id: id})
  }

  function editTodo(id){
    dispatch({type: 'EDIT', id: id})
  }

  function updateTodo(e, todo){
    e.preventDefault();
    let newTodo = e.target.elements.newTodo.value;
    if(newTodo !== ''){
      dispatch({type: "UPDATE", id: todo.id, title: newTodo})
    }else{
      alert('Edit your task!!')
    }
  }

  useEffect(()=> {
    const todoList = localStorage.getItem('TODOS');
    if(todoList !== '') dispatch({type: 'INITIALTODOS', todos: JSON.parse(todoList)})
  }, [])

  useEffect(()=> {
    localStorage.setItem('TODOS', JSON.stringify(todos));
  }, [todos])
  return (
    <div className='todos-wrapper'>
      <h1>TODO LIST</h1>
      <form onSubmit={formHandler} className="input-wrapper">
      <input type="text" name="task" /> <button type='submit' >add</button>
      </form>
      <div className='todos'>
      {
        todos.length === 0 ? 
        (<h2>No task added</h2>):
        (<>
        {todos.map((todo) => <Todo key={todo.id} todo={todo}
        handleComplete={handleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        updateTodo={updateTodo}
        /> )}
        </>) 
      }
      </div>
    </div>
  )
}

export default App
