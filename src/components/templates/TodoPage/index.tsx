import React, { useState } from 'react';
import TodoForm from '../../organisms/TodoForm';
import TodoList from '../../organisms/TodoList';
import Input from '../../atoms/Input';
import styles from './style.module.css';

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<{ id: number; title: string }[]>([]);
  const [search, setSearch] = useState('');

  // Todoを追加する関数
  const handleAddTodo = (title: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: prevTodos.length + 1, title },
    ]);
  };

  // Todoを削除する関数
  const handleDeleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  // 検索の入力を処理する関数
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // 検索結果に基づいてTodoをフィルタリング
  const filteredTodos = todos.filter(todo => 
    todo.title.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <div className={styles.todoPage}>
      <h1>Todoリスト</h1>
      <Input
        value={search}
        onChange={handleSearchChange}
        placeholder="検索"
      />
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={filteredTodos} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default TodoPage;
