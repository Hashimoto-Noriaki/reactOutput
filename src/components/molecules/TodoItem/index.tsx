import React from 'react';
import styles from './style.module.css';

type TodoItemProps = {
  id: number;
  title: string;
  onDelete: (id: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ id, title, onDelete }) => (
  <div className={styles.todoItem}>
    <span>{title}</span>
    <button className={styles.deleteButton} onClick={() => onDelete(id)}>
      削除
    </button>
  </div>
);

export default TodoItem;
