import styles from '../styles/TodoItem.module.css';

const TodoItem = ({ itemProp, handleChange, delTodo }) => (
  <div className={styles.content}>
    <li className={styles.item}>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      <button type="button" onClick={() => delTodo(itemProp.id)}>Delete</button>
      {itemProp.title}
    </li>
  </div>
);

export default TodoItem;
