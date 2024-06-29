import { TodoList } from './components/TodoList';
import { TodoInput } from './components/TodoInput';
import { useEffect, useState } from 'react';
function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [todoValue, setTodoValue] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);  // Track the index of the todo being edited
  function handleAddTodos(newTodo) {
    if (newTodo.trim()) {
      if (editingIndex !== null) {
        // Update existing todo
        const newTodoList = todos.map((todo, index) =>
          index === editingIndex ? newTodo : todo
        );
        setTodos(newTodoList);
        setEditingIndex(null);
      } else {
        // Add new todo
        const newTodoList = [...todos, newTodo];
        setTodos(newTodoList);
      }
      setTodoValue('');
    }
  }
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodoList);
  }
  function handleEditTodo(index) {
    setTodoValue(todos[index]);
    setEditingIndex(index);
  }
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <main>
      <TodoInput 
        handleAddTodos={handleAddTodos} 
        todoValue={todoValue} 
        setTodoValue={setTodoValue} 
        isEditing={editingIndex !== null}
      />
      <TodoList 
        todos={todos} 
        handleDeleteTodo={handleDeleteTodo} 
        handleEditTodo={handleEditTodo} 
      />
    </main>
  );
}
export default App;