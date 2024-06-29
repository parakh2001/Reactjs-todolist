import React from 'react';

export const TodoInput = ({ handleAddTodos, todoValue, setTodoValue, isEditing }) => {
  return (
    <header>
      <input 
        value={todoValue} 
        onChange={(e) => setTodoValue(e.target.value)} 
        placeholder="Enter todo..." 
      />
      <button onClick={() => {
        handleAddTodos(todoValue);
      }}>
        {isEditing ? 'Update' : 'Add'}
      </button>
    </header>
  );
};
