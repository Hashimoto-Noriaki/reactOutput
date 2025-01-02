import React from 'react';
import TodoItem from '../../molecules/TodoItem'; // TodoItemをインポート
import styles from './style.module.css';

type TodoListProps = {
  todos: { id: number; title: string }[];
  onDelete: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => (
  <div className={styles.todoList}>
    {todos.map(todo => (
      <TodoItem key={todo.id} id={todo.id} title={todo.title} onDelete={onDelete} />
    ))}
  </div>
);

export default TodoList;
