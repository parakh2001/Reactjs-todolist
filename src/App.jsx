import { TodoList } from './components/TodoList';
import { TodoInput } from './components/TodoInput';
import { useEffect, useState } from 'react';
function App() {
  const [todos, setTodos] = useState(()=>{
    const savedTodos = localStorage.getItem('todos');
    return savedTodos?JSON.parse(savedTodos):[];
  });
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }
  function handleDeleteTodo(index){
    
  }
  function handleEditTodo(Index){

  }
  // we want to persist it on every page reload in localStorage for that we have to use useEffect
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])
  return (
    <main>
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo}/>
    </main>
  );
}
export default App;