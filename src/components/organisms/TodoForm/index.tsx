import React, { useState } from 'react';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import styles from './style.module.css';

type TodoFormProps = {
  onAddTodo: (title: string) => void;
};

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    if (title.trim()) {
      onAddTodo(title);
      setTitle('');
    }
  };

  return (
    <div className={styles.todoForm}>
      <Input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="新しいタスクを追加"
      />
      <Button onClick={handleSubmit}>追加</Button>
    </div>
  );
};

export default TodoForm;