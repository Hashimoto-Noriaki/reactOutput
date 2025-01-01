import React from 'react';
import styles from './style.module.css';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => (
  <input
    className={styles.input}
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default Input;
