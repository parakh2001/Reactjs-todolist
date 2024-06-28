import { TodoList } from './components/TodoList';
import { TodoInput } from './components/TodoInput';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }
  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo,todoIndex)=>{
      return todoIndex !==index
    })
    setTodos(newTodoList);
  }
  function handleEditTodo(Index){
    // function to edit the todo
    // todos[index] = 
  }
  return (
    <main>
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo}/>
    </main>
  );
}

export default App;
