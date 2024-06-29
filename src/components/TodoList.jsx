import React from 'react';
import { TodoCard } from './TodoCard';

export const TodoList = ({ todos, handleDeleteTodo, handleEditTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoCard 
          key={index} 
          index={index} 
          handleDeleteTodo={handleDeleteTodo} 
          handleEditTodo={handleEditTodo}
        >
          <span>{todo}</span>
        </TodoCard>
      ))}
    </ul>
  );
};
